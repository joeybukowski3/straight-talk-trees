export function parseRecipients(rawList: string): string[] {
  return rawList
    .split(",")
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0);
}
