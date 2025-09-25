const params =
  process.env.NEXT_PUBLIC_PROJECT === "suewallstreet"
    ? require("./projects/suewallstreet").params
    : require("./projects/chromeextension").params;
export { params };
