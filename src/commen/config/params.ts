const params =
  process.env.NEXT_PUBLIC_PROJECT === "suewallstreet"
    ? require("./projects/suewallstreet").params
    : require("./projects/chromeextension").params;
process.env.NEXT_PUBLIC_MEDIA_URL === "suewallstreet"
  ? (params.baseUrl = "https://www.suewallstreet.com")
  : (params.baseUrl = "https://www.chromeextension.com");
export { params };
