/** FormSubmit endpoint for Marviko2007@mail.ru (hash hides email in client bundle) */
export const FORM_SUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/1ed3eea6129b23087d80f6df34c72ed9";

export const sendFormEmail = async (
  subject: string,
  data: Record<string, string>
): Promise<boolean> => {
  try {
    await fetch(FORM_SUBMIT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _subject: subject, ...data }),
    });
    return true;
  } catch {
    return false;
  }
};
