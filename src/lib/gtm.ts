/** GTM form_type values for form_submission_success event */
export type GtmFormType =
  | "lead_contact"
  | "price_calc"
  | "consultation"
  | "question"
  | "window_order"
  | "door_quote"
  | "partition_quote"
  | "windowsill_measure"
  | "accessories"
  | "portfolio";

/** Push successful form submission to GTM dataLayer (after server OK). */
export function pushFormSubmissionSuccess(formType: GtmFormType): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "form_submission_success",
    form_type: formType,
  });
}
