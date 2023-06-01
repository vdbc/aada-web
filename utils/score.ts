export function getProgressPercent(value?: string) {
  const numOfWords = (value ?? "").trim().split(/\s+/).length;
  if (numOfWords <= 10) return 0;
  if (numOfWords <= 50) return 10;
  if (numOfWords <= 100) return 30;
  if (numOfWords <= 150) return 50;
  if (numOfWords <= 200) return 75;
  return 100;
}
