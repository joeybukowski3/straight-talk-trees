export interface ContactSubmission {
  name: string;
  phone: string;
  email: string;
  service: string;
  urgency: string;
  location: string;
  description: string;
  sourcePath: string;
}

const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char] ?? char);
}

export function buildContactSubject(submission: ContactSubmission): string {
  return `New Tree Service Request — ${submission.service} — ${submission.name}`;
}

export function buildContactEmailText(submission: ContactSubmission, submittedAt: string): string {
  return [
    "Bukowski Tree Company website submission",
    `Submitted: ${submittedAt}`,
    `Source page: ${submission.sourcePath}`,
    "",
    `Name: ${submission.name}`,
    `Phone: ${submission.phone}`,
    `Email: ${submission.email}`,
    `Service requested: ${submission.service}`,
    `Urgency: ${submission.urgency}`,
    `ZIP code or location: ${submission.location}`,
    "",
    "Description:",
    submission.description,
  ].join("\n");
}

export function buildContactEmailHtml(submission: ContactSubmission, submittedAt: string): string {
  const rows: Array<[string, string]> = [
    ["Submitted", submittedAt],
    ["Source page", submission.sourcePath],
    ["Name", submission.name],
    ["Phone", submission.phone],
    ["Email", submission.email],
    ["Service requested", submission.service],
    ["Urgency", submission.urgency],
    ["ZIP code or location", submission.location],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:600;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:4px 0;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return [
    "<div>",
    "<h1>Bukowski Tree Company website submission</h1>",
    `<table>${rowsHtml}</table>`,
    "<h2>Description</h2>",
    `<p>${escapeHtml(submission.description).replace(/\n/g, "<br />")}</p>`,
    "</div>",
  ].join("");
}
