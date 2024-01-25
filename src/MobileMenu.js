import React, { useEffect, useState, createContext, useContext } from "react";
import config from "./config";
import axios from "axios";
import { BlockStack, Thumbnail } from "@shopify/polaris";
import { SVG_ICON } from "./SVG_ICON";
import { NoteMinor } from "@shopify/polaris-icons";

const ShopifyContext = createContext();

const MobileMenu = () => {
  const [rgbStyle, setrgbStyle] = useState();
  const [selected, setselected] = useState("Icon");
  const [rgbbordercolor, setrgbbordercolor] = useState();
  const [SelectedIcons, setSelectedIcons] = useState({
    Menu1Icon: "",
    Menu2Icon: "",
    Menu3Icon: "",
    Menu4Icon: "",
    Menu5Icon: "",
    Menu6Icon: "",
  });
  const [SelectedImage, setSelectedImage] = useState({
    Menu1Image: "",
    Menu2Image: "",
    Menu3Image: "",
    Menu4Image: "",
    Menu5Image: "",
    Menu6Image: "",
  });
  const [cartcountercolor, setcartcountercolor] = useState("");
  const [cartcountertextcolor, setcartcountertextcolor] = useState("");
  const [menucheckbox, setmenucheckbox] = useState(true);
  const [rgbtextcolor, setrgbtextcolor] = useState("");
  const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
  const [namevalue, setNamevalue] = useState({
    namevalue1: "",
    namevalue2: "",
    namevalue3: "",
    namevalue4: "",
    namevalue5: "",
    namevalue6: "",
  });
  const [linkvalue, setLinkvalue] = useState({
    linkvalue1: "",
    linkvalue2: "",
    linkvalue3: "",
    linkvalue4: "",
    linkvalue5: "",
    linkvalue6: "",
  });
  const [rgbiconcolor, setrgbiconcolor] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [allmenuclicks, setallmenuclicks] = useState({
    Menu1Icon: 0,
    Menu2Icon: 0,
    Menu3Icon: 0,
  });
  const message = window.Shopify;
  console.log(window, "6598");

  console.log(message, "6598");
  useEffect(() => {
    return async () => {
      if (message) {
        const { data } = await axios.get(
          `${config.api_endpoint}/customise/campaigns/list?shop=${message.shop}`
        );
        // const getplan = await axios.get(
        //   `${config.api_endpoint}/dashboard/shop/app/status?shop=${config.shop_name}`
        // );
        // console.log(getplan, "6532");
        console.log(data, "452");
        //   if (data.status) {
        //     setloading(true);
        //   }
        //   setstoreuserid(data.data[0].store_user_id);
        //   setstoreuserid(data.data[0].store_user_id);
        // setSelectedColor(data.data[0].background_color);
        setrgbbordercolor(data.data[0].border_color);
        setrgbiconcolor(data.data[0].icon_color);
        setrgbStyle(data.data[0].background_color);
        setrgbtextcolor(data.data[0].text_color);
        //   setCustomcssvalue(data.data[0].custom_css);
        // setCustomcssvalue(data.data[0].custom_css);

        const geticons = {};
        const getimages = {};
        const getnamevalue = {};
        const getlinkvalue = {};
        for (let index = 1; index <= 6; index++) {
          geticons[`Menu${index}Icon`] = JSON.parse(
            data.data[0][`menu${index}`]
          ).icon;
          getimages[`Menu${index}Image`] = JSON.parse(
            data.data[0][`menu${index}`]
          ).image;
          getnamevalue[`namevalue${index}`] = JSON.parse(
            data.data[0][`menu${index}`]
          ).name;
          getlinkvalue[`linkvalue${index}`] = JSON.parse(
            data.data[0][`menu${index}`]
          ).link;
        }
        console.log(
          JSON.parse(data.data[0][`menu1`]).image,
          JSON.parse(data.data[0][`menu2`]).image,
          JSON.parse(data.data[0][`menu3`]).image,
          JSON.parse(data.data[0][`menu4`]).image,
          "5+62"
        );
        setNamevalue((prevname) => ({ ...prevname, ...getnamevalue }));
        setLinkvalue((prevLink) => ({ ...prevLink, ...getlinkvalue }));
        console.log(JSON.parse(data.data[0][`menu1`]).image, "5962");
        setSelectedIcons((prevIcons) => ({ ...prevIcons, ...geticons }));
        setSelectedImage((prevImages) => ({ ...prevImages, ...getimages }));
      }
      if (window.Shopify) {
        // console.log(window.Shopify.shop, "6598+65");
      }
    };
  }, []);

  return (
    <div /* style={{ display: "none" }} */>
      {/* <ShopifyContext.Provider value={{ shopifyStore, setStore }}> */}
      <style>
        {`.nav-grid-icon svg{
                width:50px !important;
                height:50px !important;
                margin:20px;
            }.nav-grid-icon svg{
                fill:${rgbiconcolor}
              }
              li{
                list-style :none
              }
            `}
      </style>
      <div className="mobile-menu-wrap">
        <ul
          className="mobile-bar-nav"
          style={{
            display: "flex",
            width: "100%",
            position: "fixed",
            bottom: "0",
            background: "white",
            zindex: 1,
            backgroundColor: rgbStyle,
            borderColor: rgbbordercolor,
          }}
        >
          {console.log(allmenuclicks["Menu1Icon"])}
          {console.log("dishant")}
          {selected === "Icon"
            ? Object.keys(SelectedIcons).map((menuitem, index) => (
                <li className="nav-grid" key={index}>
                  <a
                    onClick={() => {
                      setallmenuclicks({
                        ...allmenuclicks,
                        [`${menuitem}`]: allmenuclicks[`${menuitem}`] + 1,
                      });
                      console.log(menuitem, index);
                    }}
                    href={linkvalue[`linkvalue${menuitem?.match(/\d+/)}`]}
                    className="nav-grid-icon"
                  >
                    <div
                      className={`menu-icon-${index + 1}`}
                      dangerouslySetInnerHTML={{
                        __html: SVG_ICON[SelectedIcons[menuitem]] || "",
                      }}
                    />
                    {/* {index === 2 && (
                        <div className="sp-product">
                          <span style={{ color: "rgb(195, 195, 195)" }}>
                            <svg
                              className="icart-svg-icon icart-stickycart-icon icart-animated icartZoomIn"
                              viewBox="0 0 32 32"
                            >
                              <path d="m27.719 20.296 3.607-10.718c.181-.519.044-.792-.103-.998-.374-.527-1.142-.512-1.292-.512l-20.385.006-.544-2.733C8.855 4.732 8.421 4 7.546 4H1.817C1.224 4 1 4.59 1 5.146v1.49c0 .536.222.364.838.364h4.837l3.702 15.873c-.588.623-.908 1.609-.908 2.457 0 1.864 1.484 3.465 3.379 3.465 1.791 0 3.132-1.795 3.35-2.795h7.21c.218 1 1.305 2.873 3.349 2.873 1.862 0 3.378-1.535 3.378-3.396 0-1.852-1.125-3.609-3.359-3.609-.928 0-2.031.133-2.543 1.133h-8.859c-.643-1-1.521-1.311-2.409-1.345L12.843 21h13.479c1.016 0 1.216-.214 1.397-.704zm-16.182 5.218c0-.709.577-1.286 1.286-1.286a1.286 1.286 0 0 1 0 2.571c-.71 0-1.286-.576-1.286-1.285zm15.246 1.269a1.271 1.271 0 1 1 1.27-1.27c0 .7-.569 1.27-1.27 1.27z" />
                            </svg>
                          </span>
                          <span
                            className="sp-product-count"
                            style={{
                              color: "rgb(195, 195, 195)",
                              backgroundColor: "rgb(8, 148, 8)",
                            }}
                          >
                            <span>3</span>
                          </span>
                        </div>
                      )} */}
                    {menucheckbox && (
                      <span style={{ color: rgbtextcolor }}>
                        {namevalue[`namevalue${menuitem?.match(/\d+/)}`]}
                      </span>
                    )}
                  </a>
                </li>
              ))
            : Object.keys(SelectedImage)?.map((menuimage, index) => (
                <li className="nav-grid" key={index}>
                  <BlockStack>
                    <Thumbnail
                      key={index}
                      size="medium"
                      alt={"SelectedImage[menuimage].name"}
                      source={
                        // getimage
                        validImageTypes.includes(SelectedImage[menuimage])
                          ? window.URL?.createObjectURL(
                              SelectedImage[menuimage]
                            )
                          : NoteMinor
                      }
                    ></Thumbnail>
                    {menucheckbox && (
                      <span style={{ color: rgbtextcolor }}>
                        {namevalue[`namevalue${menuimage?.match(/\d+/)}`]}
                      </span>
                    )}
                  </BlockStack>
                </li>
              ))}
        </ul>
      </div>
      {console.log(allmenuclicks, "458")}
      {/* </ShopifyContext.Provider> */}
    </div>
  );
};

export default MobileMenu;
