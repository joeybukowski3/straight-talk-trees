import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const sendMock = vi.fn();

vi.mock("resend", () => ({
  Resend: class {
    emails = { send: sendMock };
  },
}));

import {
  deliverContactSubmission,
  PUBLIC_ERROR,
  submissionSchema,
  type ContactSubmissionInput,
} from "./contact.functions";

const baseSubmission: ContactSubmissionInput = {
  name: "Jane Homeowner",
  phone: "555-123-4567",
  email: "jane@example.com",
  service: "Tree Removal",
  urgency: "Same day",
  location: "77002",
  description: "A large limb is hanging over the driveway.",
  website: "",
  sourcePath: "/contact",
};

const ORIGINAL_ENV = { ...process.env };

function setEnv(
  env: Partial<Record<"RESEND_API_KEY" | "CONTACT_FROM_EMAIL" | "CONTACT_TO_EMAIL", string>>,
) {
  process.env.RESEND_API_KEY = env.RESEND_API_KEY;
  process.env.CONTACT_FROM_EMAIL = env.CONTACT_FROM_EMAIL;
  process.env.CONTACT_TO_EMAIL = env.CONTACT_TO_EMAIL;
}

describe("deliverContactSubmission", () => {
  beforeEach(() => {
    sendMock.mockReset();
    setEnv({
      RESEND_API_KEY: "test-key",
      CONTACT_FROM_EMAIL: "Jake <jake@bukowskitrees.com>",
      CONTACT_TO_EMAIL: "owner@example.com",
    });
  });

  afterEach(() => {
    process.env = { ...ORIGINAL_ENV };
    vi.restoreAllMocks();
  });

  it("delivers to a single recipient", async () => {
    sendMock.mockResolvedValueOnce({ data: { id: "email_123" }, error: null });

    const result = await deliverContactSubmission(baseSubmission);

    expect(result).toEqual({ ok: true, discarded: false });
    expect(sendMock).toHaveBeenCalledTimes(1);
    const payload = sendMock.mock.calls[0][0];
    expect(payload.to).toEqual(["owner@example.com"]);
    expect(payload.replyTo).toBe(baseSubmission.email);
    expect(payload.subject).toBe("New Tree Service Request — Tree Removal — Jane Homeowner");
  });

  it("delivers to multiple comma-separated recipients", async () => {
    setEnv({
      RESEND_API_KEY: "test-key",
      CONTACT_FROM_EMAIL: "Jake <jake@bukowskitrees.com>",
      CONTACT_TO_EMAIL: " owner@example.com , ops@example.com ,,",
    });
    sendMock.mockResolvedValueOnce({ data: { id: "email_456" }, error: null });

    await deliverContactSubmission(baseSubmission);

    const payload = sendMock.mock.calls[0][0];
    expect(payload.to).toEqual(["owner@example.com", "ops@example.com"]);
  });

  it("throws the public error when environment variables are missing", async () => {
    setEnv({
      RESEND_API_KEY: undefined,
      CONTACT_FROM_EMAIL: undefined,
      CONTACT_TO_EMAIL: undefined,
    });

    await expect(deliverContactSubmission(baseSubmission)).rejects.toThrow(PUBLIC_ERROR);
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("discards honeypot submissions without calling Resend", async () => {
    const result = await deliverContactSubmission({
      ...baseSubmission,
      website: "http://spam.example",
    });

    expect(result).toEqual({ ok: true, discarded: true });
    expect(sendMock).not.toHaveBeenCalled();
  });

  it("throws the public error when Resend returns an error object", async () => {
    sendMock.mockResolvedValueOnce({
      data: null,
      error: { name: "validation_error", message: "bad request" },
    });

    await expect(deliverContactSubmission(baseSubmission)).rejects.toThrow(PUBLIC_ERROR);
  });

  it("rejects malformed form input at the schema boundary", () => {
    const malformed = { ...baseSubmission, email: "not-an-email" };

    expect(() => submissionSchema.parse(malformed)).toThrow();
  });

  it("rejects form input missing required fields", () => {
    const { description: _description, ...malformed } = baseSubmission;

    expect(() => submissionSchema.parse(malformed)).toThrow();
  });
});
