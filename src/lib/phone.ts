import { SITE } from "@/config/site";

/** Belarus mobile/operator codes after country code 375. */
const BY_OPERATOR_CODES = /^(25|29|33|44|17)$/;

export const PHONE_ERROR_MESSAGE = `Введите номер в формате ${SITE.phonePlaceholder}`;

export function extractPhoneDigits(value: string): string {
  let digits = value.replace(/\D/g, "");

  if (digits.startsWith("80")) {
    digits = "375" + digits.slice(2);
  } else if (digits.startsWith("8") && digits.length > 1) {
    digits = "375" + digits.slice(1);
  }

  return digits.slice(0, 12);
}

/** Formats input as +375 29 XXX-XX-XX while typing. */
export function formatPhoneInput(value: string): string {
  const digits = extractPhoneDigits(value);
  if (!digits) return "";

  let formatted = `+${digits.slice(0, 3)}`;
  const operator = digits.slice(3, 5);
  const part1 = digits.slice(5, 8);
  const part2 = digits.slice(8, 10);
  const part3 = digits.slice(10, 12);

  if (operator) formatted += ` ${operator}`;
  if (part1) formatted += ` ${part1}`;
  if (part2) formatted += `-${part2}`;
  if (part3) formatted += `-${part3}`;

  return formatted;
}

export function isValidPhone(value: string): boolean {
  const digits = extractPhoneDigits(value);
  if (digits.length !== 12 || !digits.startsWith("375")) return false;
  return BY_OPERATOR_CODES.test(digits.slice(3, 5));
}

export function getPhoneValidationError(value: string): string | null {
  if (!value.trim()) return "Пожалуйста, введите номер телефона";
  if (!isValidPhone(value)) return PHONE_ERROR_MESSAGE;
  return null;
}
