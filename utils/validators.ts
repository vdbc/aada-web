export function requiredValidator(
  text: string,
  message = "Field is not empty!"
) {
  if (!text) return message;

  return text.trim().length > 0 ? "" : message;
}
