export function formatDate(dateString?: string): string {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return isNaN(date.getTime())
    ? "N/A"
    : date
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .replaceAll("/", "-");
}

export function formatClassPeriod(start?: string, end?: string): string {
  const startFormatted = formatDate(start);
  const endFormatted = end ? formatDate(end) : "Ongoing";
  return `${startFormatted} - ${endFormatted}`;
}
