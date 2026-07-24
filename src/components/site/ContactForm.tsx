import { useId, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/contact.functions";
import { PHONE_DISPLAY, PHONE_HREF, SERVICE_OPTIONS, URGENCY_OPTIONS } from "./data";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ variant = "hero" }: { variant?: "hero" | "section" }) {
  const submit = useServerFn(submitContact);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formId = useId();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      service: String(fd.get("service") || "").trim(),
      urgency: String(fd.get("urgency") || "").trim(),
      location: String(fd.get("location") || "").trim(),
      description: String(fd.get("description") || "").trim(),
      website: String(fd.get("website") || ""),
    };

    const nextErrors: Record<string, string> = {};
    if (!data.name) nextErrors.name = "Please enter your name.";
    if (!data.phone || data.phone.replace(/\D/g, "").length < 7) nextErrors.phone = "Please enter a valid phone number.";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) nextErrors.email = "Please enter a valid email.";
    if (!data.service) nextErrors.service = "Please choose a service.";
    if (!data.urgency) nextErrors.urgency = "Please choose urgency.";
    if (!data.location) nextErrors.location = "Please enter your ZIP or area.";
    if (!data.description) nextErrors.description = "Please describe the work.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("submitting");
    try {
      await submit({ data });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const wrap =
    variant === "hero"
      ? "relative rounded-lg border border-[color:var(--border)] bg-white p-5 sm:p-6 shadow-sm text-[color:var(--foreground)]"
      : "relative rounded-lg border border-[color:var(--border)] bg-white p-5 sm:p-6 text-[color:var(--foreground)]";

  return (
    <form onSubmit={handleSubmit} noValidate className={wrap} aria-labelledby={`${formId}-title`}>
      <h3 id={`${formId}-title`} className="text-xl font-semibold text-[color:var(--forest)]">
        Request a Free Consultation
      </h3>
      <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
        For immediate or dangerous conditions, call{" "}
        <a href={PHONE_HREF} className="font-semibold text-[color:var(--forest)] underline">
          {PHONE_DISPLAY}
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
        <Field label="Name" name="name" error={errors.name} autoComplete="name" required />
        <Field label="Phone number" name="phone" type="tel" error={errors.phone} autoComplete="tel" required />
        <Field label="Email" name="email" type="email" error={errors.email} autoComplete="email" required className="sm:col-span-2" />
        <SelectField label="Service needed" name="service" options={SERVICE_OPTIONS} error={errors.service} required />
        <SelectField label="Is this urgent?" name="urgency" options={URGENCY_OPTIONS} error={errors.urgency} required />
        <Field label="ZIP code or general location" name="location" error={errors.location} autoComplete="postal-code" required className="sm:col-span-2" />
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-[color:var(--foreground)]">
            Brief description of the work
            <textarea name="description" rows={4} required className="mt-1 w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2 text-sm text-[color:var(--foreground)] focus:border-[color:var(--forest)] focus:outline-none focus:ring-2 focus:ring-[color:var(--forest)]/30" />
          </label>
          {errors.description && <p className="mt-1 text-xs text-[color:var(--destructive)]">{errors.description}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-[color:var(--amber-cta)] px-4 py-3 text-sm font-semibold text-[color:var(--amber-cta-foreground)] shadow-sm hover:brightness-95 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Request My Consultation"}
      </button>

      {status === "success" && (
        <p role="status" className="mt-4 rounded-md border border-[color:var(--forest)]/30 bg-[color:var(--sage)] px-3 py-2 text-sm text-[color:var(--forest)]">
          Thank you. Your consultation request has been received. For urgent or dangerous tree conditions, call{" "}
          <a href={PHONE_HREF} className="font-semibold underline">{PHONE_DISPLAY}</a>.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="mt-4 rounded-md border border-[color:var(--destructive)]/30 bg-[color:var(--destructive)]/10 px-3 py-2 text-sm text-[color:var(--destructive)]">
          We could not send your request. Please call <a href={PHONE_HREF} className="font-semibold underline">{PHONE_DISPLAY}</a> for assistance.
        </p>
      )}
    </form>
  );
}

function Field({ label, name, type = "text", required, autoComplete, error, className }: { label: string; name: string; type?: string; required?: boolean; autoComplete?: string; error?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-[color:var(--foreground)]">
        {label}
        <input name={name} type={type} required={required} autoComplete={autoComplete} className="mt-1 w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2 text-sm text-[color:var(--foreground)] focus:border-[color:var(--forest)] focus:outline-none focus:ring-2 focus:ring-[color:var(--forest)]/30" />
      </label>
      {error && <p className="mt-1 text-xs text-[color:var(--destructive)]">{error}</p>}
    </div>
  );
}

function SelectField({ label, name, options, required, error }: { label: string; name: string; options: string[]; required?: boolean; error?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-[color:var(--foreground)]">
        {label}
        <select name={name} required={required} defaultValue="" className="mt-1 w-full rounded-md border border-[color:var(--border)] bg-white px-3 py-2 text-sm text-[color:var(--foreground)] focus:border-[color:var(--forest)] focus:outline-none focus:ring-2 focus:ring-[color:var(--forest)]/30">
          <option value="" disabled>Select an option</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </label>
      {error && <p className="mt-1 text-xs text-[color:var(--destructive)]">{error}</p>}
    </div>
  );
}