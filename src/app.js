import React, { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./assets/css/style.css";
import config from "./config";
import { NavigationMenu, Provider, TitleBar } from "@shopify/app-bridge-react";
import Routes from "./Routes";
// import axios from "axios";
import { generateToken } from "./redux/slice/mobileSlice";
import { useDispatch } from "react-redux";
import { Fullscreen } from "@shopify/app-bridge/actions";

const urlParams = new URLSearchParams(window.location.search);
console.log("return urlParams", JSON.stringify(window.location));
const shop = urlParams.get("shop");
const code = urlParams.get("code");
console.log(code, shop, "code");

const primaryAction = { content: "FAQ", url: "/faq" };
const secondaryActions = [
  { content: "Dashboard", url: "/" },
  { content: "Customise", url: "/customise" },
  { content: "Pricing Plans", url: "/PricingPlans" },
  { content: "How to install", url: "/Howtoinstall" },
];
const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const dispatch = useDispatch();
  const history = useMemo(
    () => ({ replace: (path) => navigate(path, { replace: true }) }),
    [navigate]
  );

  const router = useMemo(
    () => ({
      location,
      history,
    }),
    [location, history]
  );

  // useEffect(() => {
  //   return async () => {
  //     await dispatch(generateToken());
  //   };
  // }, [dispatch]);

  // useEffect(() => {
  //   return async () => {
  //     if (shop) {
  //       const data = await axios.get(`${config.api_endpoint}/install-app`, {
  //         shop,
  //       });
  //       console.log("<===== install app ====>", data);
  //       if (data.data.install_url.original.install_url) {
  //         console.log(
  //           "insatll url",
  //           data.data.install_url.original.install_url
  //         );
  //         // debugger;
  //         window.top.location.href = decodeURIComponent(data.data.install_url.original.install_url);
  //         // window.location.replace(
  //         //   decodeURIComponent(data.data.install_url.original.install_url)
  //         // );
  //       }
  //     }
  //   };
  // }, []);

  useEffect(() => {
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/5eb672ce8ee2956d739f7dfa/default";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
    console.log("Tawk_API", window.Tawk_API);
    if (window.Tawk_API?.visitor) {
      window.Tawk_API.visitor = {
        name: "",
        email: "",
      };
    }
  }, []);

  return (
    <div className="App">
      {window.location.hostname === "subscriptions.addigitech.com" ? (
        <Provider config={config} router={router}>
          {console.log("451659")}
          <NavigationMenu
            navigationLinks={[
              {
                label: "Dashboard",
                destination: "/",
              },
              {
                label: "fullscreen",
                destination: "/FullscreenBar",
              },
              {
                label: "Dashboard",
                destination: "/dashboard",
              },
              {
                label: "Customise",
                destination: "/customise",
              },
              {
                label: "Pricing Plans",
                destination: "/pricingplans",
              },
              {
                label: "How to install",
                destination: "/Howtoinstall",
              },
              {
                label: "FAQ",
                destination: "/faq",
              },
              {
                label: "FAQacc",
                destination: "/faqacc",
              },
            ]}
            matcher={(link, location) => link.destination === location.pathname}
          />
          <TitleBar
            primaryAction={primaryAction}
            secondaryActions={secondaryActions}
          />
          {/* <Fullscreen ></Fullscreen> */}
          <Routes />
        </Provider>
      ) : (
        <Routes />
      )}
    </div>
  );
};

export default App;
