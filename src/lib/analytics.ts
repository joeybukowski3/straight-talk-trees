import { track } from "@vercel/analytics";

export type ConversionEvent =
  | "phone_header_click"
  | "phone_hero_click"
  | "phone_emergency_click"
  | "phone_footer_click"
  | "phone_mobile_click"
  | "phone_final_click"
  | "consultation_cta_click"
  | "consultation_hero_click"
  | "consultation_mobile_click"
  | "consultation_final_click"
  | "contact_form_attempt"
  | "contact_form_success"
  | "contact_form_failure";

export function trackConversion(event: ConversionEvent) {
  try {
    track(event);
  } catch {
    // Analytics must never block calling or form submission.
  }
}
