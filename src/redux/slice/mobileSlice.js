import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import createApp from "@shopify/app-bridge";
import axios from "axios";
import { Redirect } from "@shopify/app-bridge/actions";
import config from "../../config";
import { useNavigate } from "react-router-dom";

export const generateToken = createAsyncThunk(
  "fetch/generateToken",
  async () => {
    // const navigate = useNavigate()
    const res = await axios.get(
      // "https://dummyjson.com/products"
      // `https://menu.addigitech.com/user/ajax_actions.php`,
      // {
      //   method_name: 'changeAppStatus',
      //   status: "0",
      //   shop: "mobile-menu-bar-statging.myshopify.com",
      // }
    );
    // navigate(decodeURIComponent( res.data.install_url.original.install_url))
    // console.log(
    //   res.data.install_url.original.install_url,
    //   ";===--res.data",
    //   JSON.stringify(res.data)
    // );
    console.log(res, "454");
    return res.data;
  }
);
const mobileSlice = createSlice({
  name: "zone",
  initialState: {
    store_data: {},
    status: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(generateToken.pending, (state) => {
        state.status = false;
      })
      .addCase(generateToken.fulfilled, (state, { payload }) => {
        console.log("454");
        console.log(generateToken, "454185", payload);
        // const { products, token } = payload;
        // state.store_data = { shop_data: products, token };
        // console.log(payload.install_url.original.install_url, "5+965");
        // window.location.href = decodeURIComponent(
        //   payload.install_url.original.install_url
        // );
        // navigate()
        state.status = true;
        // if (process.env?.MODE !== "local") {
        // console.log(payload, state);
        // const app = createApp(config);
        // state.redirect = Redirect.create(app);
        // }
      })
      .addCase(generateToken.rejected, (state) => {
        state.isError = true;
        console.log(state, "49549");
        // window.parent.location.href=`${config.api_endpoint}`
        // window.parent.location.href = `${config.api_endpoint}node/admin_api/?shop=${config.shop_name}&host=${config.host}`;
      });
  },
});

export default mobileSlice.reducer;
