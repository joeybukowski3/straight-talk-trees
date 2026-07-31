import { useId, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/contact.functions";
import { trackConversion } from "@/lib/analytics";
import { SITE } from "@/lib/site-config";
import { SERVICE_OPTIONS, URGENCY_OPTIONS } from "./data";

type Status = "idle" | "submitting" | "success" | "error";

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
  className?: string;
  maxLength?: number;
  placeholder?: string;
  inputMode?: "email" | "numeric" | "search" | "tel" | "text" | "url";
};

export function ContactForm({ variant = "hero" }: { variant?: "hero" | "section" }) {
  const submit = useServerFn(submitContact);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formId = useId();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      service: String(formData.get("service") || "").trim(),
      urgency: String(formData.get("urgency") || "").trim(),
      location: String(formData.get("location") || "").trim(),
      description: String(formData.get("description") || "").trim(),
      website: String(formData.get("website") || "").trim(),
      sourcePath: typeof window === "undefined" ? "/" : window.location.pathname,
    };

    const nextErrors: Record<string, string> = {};
    if (!data.name) nextErrors.name = "Please enter your name.";
    if (!data.phone || data.phone.replace(/\D/g, "").length < 7) {
      nextErrors.phone = "Please enter a valid phone number.";
    }
    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      nextErrors.email = "Please enter a valid email.";
    }
    if (!data.service) nextErrors.service = "Please choose a service.";
    if (!data.urgency) nextErrors.urgency = "Please choose urgency.";
    if (!data.location) {
      nextErrors.location = "Please enter your ZIP code or area.";
    }
    if (!data.description) {
      nextErrors.description = "Please describe the tree or property concern.";
    }
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setStatus("error");
      trackConversion("contact_form_failure");
      return;
    }

    setStatus("submitting");
    trackConversion("contact_form_attempt");

    try {
      await submit({ data });
      setStatus("success");
      setErrors({});
      form.reset();
      trackConversion("contact_form_success");
    } catch {
      setStatus("error");
      trackConversion("contact_form_failure");
    }
  }

  const wrap =
    variant === "hero"
      ? "relative rounded-lg border border-[color:var(--border)] bg-white p-4 text-[color:var(--foreground)] shadow-sm sm:p-6"
      : "relative rounded-lg border border-[color:var(--border)] bg-white p-5 text-[color:var(--foreground)] sm:p-6";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={wrap}
      aria-labelledby={`${formId}-title`}
      aria-describedby={`${formId}-helper`}
    >
      <h2 id={`${formId}-title`} className="text-xl font-semibold text-[color:var(--forest)]">
        Request a Free Consultation
      </h2>
      <p id={`${formId}-helper`} className="mt-1 text-sm text-[color:var(--muted-foreground)]">
        Tell us what you see and where the property is located. All fields are required. For an urgent
        condition, call{" "}
        <a href={SITE.phoneHref} className="font-semibold text-[color:var(--forest)] underline">
          {SITE.phoneDisplay}
        </a>
        .
      </p>

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field
          formId={formId}
          label="Name"
          name="name"
          error={errors.name}
          autoComplete="name"
          placeholder="Your name"
          required
          maxLength={120}
        />
        <Field
          formId={formId}
          label="Phone number"
          name="phone"
          type="tel"
          inputMode="tel"
          error={errors.phone}
          autoComplete="tel"
          placeholder="Best number to reach you"
          required
          maxLength={40}
        />
        <Field
          formId={formId}
          label="Email"
          name="email"
          type="email"
          inputMode="email"
          error={errors.email}
          autoComplete="email"
          placeholder="you@example.com"
          required
          className="sm:col-span-2"
          maxLength={200}
        />
        <SelectField
          formId={formId}
          label="Service needed"
          name="service"
          options={SERVICE_OPTIONS}
          error={errors.service}
          required
        />
        <SelectField
          formId={formId}
          label="How urgent is it?"
          name="urgency"
          options={URGENCY_OPTIONS}
          error={errors.urgency}
          required
        />
        <Field
          formId={formId}
          label="ZIP code or general location"
          name="location"
          inputMode="text"
          error={errors.location}
          autoComplete="postal-code"
          placeholder="Property ZIP code or area"
          required
          className="sm:col-span-2"
          maxLength={120}
        />
        <div className="sm:col-span-2">
          <label
            htmlFor={`${formId}-description`}
            className="block text-sm font-medium text-[color:var(--foreground)]"
          >
            Brief description of the tree or property concern
          </label>
          <p
            id={`${formId}-description-help`}
            className="mt-1 text-xs text-[color:var(--muted-foreground)]"
          >
            Include what is damaged, leaning, hanging, fallen, overgrown, or affecting access.
          </p>
          <textarea
            id={`${formId}-description`}
            name="description"
            rows={3}
            required
            maxLength={2000}
            placeholder="Example: A large limb broke during the storm and is hanging over the driveway."
            aria-invalid={Boolean(errors.description)}
            aria-describedby={[
              `${formId}-description-help`,
              errors.description ? `${formId}-description-error` : undefined,
            ]
              .filter(Boolean)
              .join(" ")}
            className="mt-2 w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2 text-base focus:border-[color:var(--forest)] focus:outline-none focus:ring-2 focus:ring-[color:var(--forest)]/30"
          />
          {errors.description && (
            <p
              id={`${formId}-description-error`}
              className="mt-1 text-xs text-[color:var(--destructive)]"
            >
              {errors.description}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[color:var(--amber-cta)] px-4 py-3 text-sm font-semibold text-[color:var(--amber-cta-foreground)] shadow-sm hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--forest)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending request…" : "Send Consultation Request"}
      </button>

      <div aria-live="polite" aria-atomic="true">
        {status === "success" && (
          <p
            role="status"
            className="mt-4 rounded-md border border-[color:var(--forest)]/30 bg-[color:var(--sage)] px-3 py-2 text-sm text-[color:var(--forest)]"
          >
            Your request was received. The company can follow up using the contact information provided. Call{" "}
            <a href={SITE.phoneHref} className="font-semibold underline">
              {SITE.phoneDisplay}
            </a>{" "}
            if the condition becomes urgent.
          </p>
        )}
        {status === "error" && (
          <p
            role="alert"
            className="mt-4 rounded-md border border-[color:var(--destructive)]/30 bg-[color:var(--destructive)]/10 px-3 py-2 text-sm text-[color:var(--destructive)]"
          >
            The request could not be sent. Review the highlighted fields or call{" "}
            <a href={SITE.phoneHref} className="font-semibold underline">
              {SITE.phoneDisplay}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  formId,
  label,
  name,
  type = "text",
  required,
  autoComplete,
  error,
  className,
  maxLength,
  placeholder,
  inputMode,
}: FieldProps & { formId: string }) {
  const inputId = `${formId}-${name}`;
  const errorId = `${inputId}-error`;

  return (
    <div className={className}>
      <label htmlFor={inputId} className="block text-sm font-medium text-[color:var(--foreground)]">
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        maxLength={maxLength}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="mt-1 min-h-11 w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2 text-base focus:border-[color:var(--forest)] focus:outline-none focus:ring-2 focus:ring-[color:var(--forest)]/30"
      />
      {error && (
        <p id={errorId} className="mt-1 text-xs text-[color:var(--destructive)]">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  formId,
  label,
  name,
  options,
  required,
  error,
}: {
  formId: string;
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  error?: string;
}) {
  const inputId = `${formId}-${name}`;
  const errorId = `${inputId}-error`;

  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-[color:var(--foreground)]">
        {label}
      </label>
      <select
        id={inputId}
        name={name}
        required={required}
        defaultValue=""
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="mt-1 min-h-11 w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2 text-base focus:border-[color:var(--forest)] focus:outline-none focus:ring-2 focus:ring-[color:var(--forest)]/30"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && (
        <p id={errorId} className="mt-1 text-xs text-[color:var(--destructive)]">
          {error}
        </p>
      )}
    </div>
  );
}
