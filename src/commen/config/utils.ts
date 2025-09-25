export const mediaUrl = (path: string) => {
  const baseUrl =
    process.env.NEXT_PUBLIC_PROJECT === "suewallstreet"
      ? process.env.NEXT_PUBLIC_MEDIA_URL_SUE ||
        "https://suewallst-chrome-extension.s3.us-east-1.amazonaws.com/public"
      : process.env.NEXT_PUBLIC_MEDIA_URL ||
        "https://cdn.zlk-active-case-extension.com/public";
  return `${baseUrl}${path}`;
};

// copyright year
export const currentYear = new Date().getFullYear();
