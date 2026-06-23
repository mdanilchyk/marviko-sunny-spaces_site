/** FormSubmit endpoint for Marviko2007@mail.ru (hash hides email in client bundle) */
export const FORM_SUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/1ed3eea6129b23087d80f6df34c72ed9";

export const FORM_SUBMIT_ERROR_MESSAGE =
  "Не удалось отправить заявку. Попробуйте позже или позвоните нам.";

export const sendFormEmail = async (
  subject: string,
  data: Record<string, string>
): Promise<boolean> => {
  try {
    const response = await fetch(FORM_SUBMIT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _subject: subject, ...data }),
    });
    if (!response.ok) {
      console.error(`FormSubmit failed: HTTP ${response.status}`);
      return false;
    }
    return true;
  } catch (error) {
    console.error("FormSubmit request failed:", error);
    return false;
  }
};
