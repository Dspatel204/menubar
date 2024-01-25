// import { createApp } from "@shopify/app-bridge";
const urlParams = new URLSearchParams(window.location.search);
console.log(JSON.stringify(window.location), "location");
const hostParam = urlParams.get("host");
const shopDomainName = urlParams.get("shop")
  ? urlParams.get("shop")
  : "mobile-menu-bar-staging.myshopify.com";
console.log(" 1st hostParam hostParam ==>", hostParam);

export const config = {
  apiKey: "2a9a4bdef7a253053b6d4657d6a6c1a7",
  host: hostParam,
  shop_name: shopDomainName,
  forceRedirect: true,
  api_endpoint: "https://subscriptions.addigitech.com/api",
};

console.log(" 2nd hostParam hostParam ==>", config.host);
export default config;
