// media url
export const mediaUrl = (path: string) => {
  const baseUrl =
    process.env.NEXT_PUBLIC_MEDIA_URL ||
    "https://cdn.zlk-active-case-extension.com/public";
  return `${baseUrl}${path}`;
};

// copyright year
export const currentYear = new Date().getFullYear();
