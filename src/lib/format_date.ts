const dateArgs: Intl.DateTimeFormatOptions = {
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    ...dateArgs,
    month: 'long',
  });
}

export function formatDateShort(date: Date) {
  return date.toLocaleDateString("en-US", {
    ...dateArgs,
    month: "short",
  });
}