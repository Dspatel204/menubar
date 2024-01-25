import {
  Badge,
  BlockStack,
  Box,
  Button,
  Card,
  InlineStack,
  Layout,
  Page,
  ProgressBar,
  Text,
  Icon,
  ButtonGroup,
  Toast,
  Frame,
  InlineGrid,
  Spinner,
  DatePicker,
} from "@shopify/polaris";
import { CalendarMajor, TickMinor } from "@shopify/polaris-icons";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "./config";
import { SVG_ICON } from "./SVG_ICON";

const NewDashboard = () => {
  const navigate = useNavigate();
  const [AppStatus, setAppStatus] = useState(0);
  const [toastmessage, settoastmessage] = useState(false);
  const [Activewidget, setActivewidget] = useState(0);
  const [Chatbtn, setChatbtn] = useState(0);
  const [progress, setProgress] = useState(33.33);
  const [task, settask] = useState(1);
  // const [shop, setshop] = useState("");
  const [Checkboxes, setCheckboxes] = useState({
    enableapp: true,
    activewidget: false,
    verifystore: false,
  });
  const [allclicks, setallclicks] = useState([]);
  const [allid, setallid] = useState([1, 2, 3, 4, 5, 6]);
  const [namevalue, setNamevalue] = useState({
    namevalue1: "",
    namevalue2: "",
    namevalue3: "",
    namevalue4: "",
    namevalue5: "",
    namevalue6: "",
  });
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
  const [linkvalue, setLinkvalue] = useState({
    linkvalue1: "",
    linkvalue2: "",
    linkvalue3: "",
    linkvalue4: "",
    linkvalue5: "",
    linkvalue6: "",
  });
  const [visible, setVisible] = useState(false);
  // const [loader, setloader] = useState(false);

  const [{ month, year }, setDate] = useState({ month: 1, year: 2024 });
  const [opendatepicker, setopendatepicker] = useState(false);
  const [selectedDates, setSelectedDates] = useState({
    start: new Date("Wed Feb 07 2024 00:00:00 GMT-0500 (EST)"),
    end: new Date("Wed Feb 07 2024 00:00:00 GMT-0500 (EST)"),
  });

  const handleMonthChange = useCallback(
    (month, year) => setDate({ month, year }),
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [visible]);
  // console.log(window.Shopify.shop, window.Shopify, "6598++");

  useEffect(() => {
    return async () => {
      const { data } = await axios.get(
        `${config.api_endpoint}/dashboard/shop/app/status?shop=${config.shop_name}`
      );
      const getmenudata = await axios.get(
        `${config.api_endpoint}/customise/campaigns/list?shop=${config.shop_name}`
      );
      console.log(typeof getmenudata.data.status, "659");
      // if (getmenudata.data.status) {
      //   setloader(true);
      // }
      console.log(getmenudata.data.data[0], "4");
      const geticons = {};
      const getimages = {};
      const getnamevalue = {};
      const getlinkvalue = {};
      for (let index = 1; index <= 6; index++) {
        geticons[`Menu${index}Icon`] = JSON.parse(
          getmenudata.data.data[0][`menu${index}`]
        ).icon;
        getimages[`Menu${index}Image`] = JSON.parse(
          getmenudata.data.data[0][`menu${index}`]
        ).image;
        getnamevalue[`namevalue${index}`] = JSON.parse(
          getmenudata.data.data[0][`menu${index}`]
        ).name;
        getlinkvalue[`linkvalue${index}`] = JSON.parse(
          getmenudata.data.data[0][`menu${index}`]
        ).link;
      }
      setSelectedIcons((prevIcons) => ({ ...prevIcons, ...geticons }));
      setSelectedImage((prevImages) => ({ ...prevImages, ...getimages }));
      setNamevalue((prevname) => ({ ...prevname, ...getnamevalue }));
      setLinkvalue((prevLink) => ({ ...prevLink, ...getlinkvalue }));

      setAppStatus(Number(data.data.app_status));
      setActivewidget(Number(data.data.widget_enable));
      setChatbtn(Number(data.data.banding_remove));
      if (data.data.app_status === "1") {
        settask(1);
        setProgress(33.33);
      }
      if (data.data.widget_enable === "1") {
        settask(2);
        setProgress(66.66);
      }
      if (data.data.banding_remove === "1") {
        settask(3);
        setProgress(100);
      }
      // setshop(data.data.shop);
      const click = [];
      for (let index = 0; index < 3; index++) {
        click.push(0);
      }
      setallclicks(click);
    };
  }, []);

  const handlecheckboxChange = (num) => {
    console.log("first", num);
    const updatedCheckboxescontent = {
      enableapp: num === 1,
      activewidget: num === 2,
      verifystore: num === 3,
    };
    setCheckboxes(updatedCheckboxescontent);
  };

  const handleappstatus = async () => {
    if (AppStatus) {
      const data = await axios.post(
        `${config.api_endpoint}/dashboard/status/enable?shop=${config.shop_name}`,
        {
          app_status: "0",
        }
      );
      console.log(data.status, "451 if");

      setAppStatus(0);
      setProgress(progress - 33.33);
      if (data.status === 200) {
        setVisible(true);
        settoastmessage("App Disabled successfully");
      }
      settask(task - 1);
    } else {
      const data = await axios.post(
        `${config.api_endpoint}/dashboard/status/enable?shop=${config.shop_name}`,
        {
          app_status: "1",
        }
      );
      console.log(data.status, "451");
      setAppStatus(1);
      if (data.status === 200) {
        setVisible(true);
        settoastmessage("App Enabled successfully");
      }
      setProgress(progress + 33.33);
      settask(task + 1);
    }
  };
  const handlewidget = async () => {
    setActivewidget(1);
    const data = await axios.post(
      `${config.api_endpoint}/dashboard/status/enable?shop=${config.shop_name}`,
      {
        widget_enable: "1",
      }
    );
    if (data.status === 200) {
      setVisible(true);
      settoastmessage("Widget Activated successfully");
    }
    setProgress(progress + 33.33);
    settask(task + 1);
  };

  const handlechatbtn = async () => {
    window.Tawk_API?.toggle();
    const data = await axios.post(
      `${config.api_endpoint}/dashboard/status/enable?shop=${config.shop_name}`,
      {
        banding_remove: "1",
      }
    );
    if (data.status === 200) {
      setVisible(true);
      settoastmessage("Verify Store successfully");
    }
    setChatbtn(1);
    setProgress(progress + 33.33);
    settask(task + 1);
  };

  return (
    <div>
      <Frame>
        {/* {loader ? ( */}
        <Page title="Dashboard">
          <Layout>
            <Layout.Section>
              <BlockStack gap={500}>
                <Card>
                  <div className="Polaris-SettingAction">
                    <div className="Polaris-SettingAction__Setting">
                      <Text as="p" fontWeight="semibold">
                        Mobile menu is&nbsp;
                        {AppStatus ? (
                          <Badge tone="success"> enabled</Badge>
                        ) : (
                          <Badge tone="critical">disabled</Badge>
                        )}
                      </Text>
                    </div>
                    <div className="Polaris-SettingAction__Action">
                      {console.log(AppStatus)}
                      <Button
                        size="large"
                        onClick={handleappstatus}
                        variant={AppStatus && "primary"}
                      >
                        <span>{!AppStatus ? "Enable" : "Disable"}</span>
                      </Button>
                      {visible ? <Toast content={toastmessage} /> : null}
                    </div>
                  </div>
                </Card>
                <Card>
                  <BlockStack gap={200}>
                    <Text as="p" variant="bodyMd" fontWeight="semibold">
                      Setup guide
                    </Text>
                    <Text as="p">
                      Awesome! Now that the app is installed successfully,
                      you'll want to get started with configuring the app
                    </Text>
                    <Box paddingBlock={200}>
                      <InlineStack gap={400}>
                        <Text as="p" tone="subdued">
                          {task < 3 ? task : "3"} of 3 tasks completed
                        </Text>
                        <div style={{ width: 750, marginTop: "6px" }}>
                          <ProgressBar
                            progress={progress}
                            size="small"
                            tone="primary"
                          />
                        </div>
                      </InlineStack>
                    </Box>
                  </BlockStack>
                  <Box
                    padding="400"
                    background={Checkboxes.enableapp && "bg-surface-secondary"}
                    borderRadius="200"
                  >
                    <InlineStack gap={400}>
                      <div
                        className={`task-bubble ${
                          !AppStatus && "task-completed"
                        }`}
                      >
                        {!AppStatus && <Icon source={TickMinor} tone="base" />}
                      </div>
                      <BlockStack gap={200}>
                        <div
                          onClick={() => handlecheckboxChange(1)}
                          className="task-header"
                        >
                          <Text as="div">Enable the app</Text>
                        </div>
                        {Checkboxes.enableapp && (
                          <div className="task-div">
                            <BlockStack gap={200}>
                              <Text as="div">
                                Awesome! Now that the app is installed
                                successfully, you'll want to get started with
                                configuring the app.
                              </Text>
                              <div>
                                <Button
                                  size="medium"
                                  onClick={handleappstatus}
                                  variant="primary"
                                  disabled={!AppStatus && "true"}
                                >
                                  <span>
                                    {AppStatus
                                      ? "App is enabled"
                                      : "App is disabled"}
                                  </span>
                                </Button>
                              </div>
                            </BlockStack>
                          </div>
                        )}
                      </BlockStack>
                    </InlineStack>
                  </Box>
                  <Box
                    padding="400"
                    background={
                      Checkboxes.activewidget && "bg-surface-secondary"
                    }
                    borderRadius="200"
                  >
                    <InlineStack gap={400}>
                      <div
                        className={`task-bubble ${
                          Activewidget && "task-completed"
                        }`}
                      >
                        {Activewidget ? (
                          <Icon source={TickMinor} tone="base" />
                        ) : null}
                      </div>
                      <BlockStack gap={200}>
                        <div
                          onClick={() => handlecheckboxChange(2)}
                          className="task-header"
                        >
                          <Text as="div">Activate the widget</Text>
                        </div>
                        {Checkboxes.activewidget && (
                          <div className="task-div">
                            <BlockStack gap={200}>
                              <Text as="div">
                                Activate our widget to be able to make the
                                booking available on your shop
                              </Text>
                              <div>
                                <ButtonGroup>
                                  <Button
                                    size="medium"
                                    onClick={handlewidget}
                                    variant="primary"
                                    disabled={Activewidget && "true"}
                                  >
                                    <span>
                                      {!Activewidget
                                        ? "Active Widget"
                                        : "Widget is activated"}
                                    </span>
                                  </Button>
                                  <Button
                                    variant="plain"
                                    onClick={() => navigate("/faq")}
                                  >
                                    Read the FAQ
                                  </Button>
                                </ButtonGroup>
                              </div>
                            </BlockStack>
                          </div>
                        )}
                      </BlockStack>
                    </InlineStack>
                  </Box>
                  <Box
                    padding="400"
                    background={
                      Checkboxes.verifystore && "bg-surface-secondary"
                    }
                    borderRadius="200"
                  >
                    <InlineStack gap={400}>
                      <div
                        className={`task-bubble ${Chatbtn && "task-completed"}`}
                      >
                        {Chatbtn ? (
                          <Icon source={TickMinor} tone="base" />
                        ) : null}
                      </div>
                      <BlockStack gap={200}>
                        <div
                          onClick={() => handlecheckboxChange(3)}
                          className="task-header"
                        >
                          <Text as="div">Verify your store</Text>
                        </div>
                        {Checkboxes.verifystore && (
                          <div className="task-div">
                            <BlockStack gap={200}>
                              <Text as="div">
                                Contact support to verify your store in order to
                                remove the branding from your Mobile menu.
                              </Text>
                              <div>
                                <Button
                                  size="medium"
                                  onClick={handlechatbtn}
                                  variant="primary"
                                  disabled={Chatbtn && "true"}
                                >
                                  Chat with us
                                </Button>
                              </div>
                            </BlockStack>
                          </div>
                        )}
                      </BlockStack>
                    </InlineStack>
                  </Box>
                </Card>
                <div>
                  <Button
                    size="slim"
                    icon={CalendarMajor}
                    onClick={() => setopendatepicker(!opendatepicker)}
                  >
                    All time {selectedDates.start?.toDateString()}
                  </Button>
                  {opendatepicker && (
                    <DatePicker
                      month={month}
                      year={year}
                      onChange={setSelectedDates}
                      onMonthChange={handleMonthChange}
                      selected={selectedDates}
                    />
                  )}
                </div>
                <Card>
                  <InlineGrid gap="400" columns={3}>
                    <InlineStack align="start">
                      <BlockStack gap={400}>
                        <Text tone="subded" alignment="center">
                          Menu
                        </Text>
                        {Object.values(namevalue)?.map((item, id) =>
                          item ? (
                            <InlineStack key={id}>
                              <Icon
                                source={
                                  SVG_ICON[SelectedIcons[`Menu${id + 1}Icon`]]
                                }
                                tone="base"
                              />
                              <Text variant="headingLg" as="h4">
                                {item}
                              </Text>
                            </InlineStack>
                          ) : null
                        )}
                      </BlockStack>
                    </InlineStack>
                    <InlineStack align="center">
                      <BlockStack gap={400}>
                        <Text tone="subded" alignment="center">
                          Link
                        </Text>
                        {Object.values(linkvalue)?.map((link) =>
                          link ? (
                            <Text variant="headingLg" as="h4" key={link}>
                              {link}
                            </Text>
                          ) : null
                        )}
                      </BlockStack>
                    </InlineStack>
                    <InlineStack align="end">
                      <BlockStack gap={400}>
                        <Text tone="subded" alignment="center">
                          Clicks
                        </Text>
                        {allclicks?.map((click) =>
                          click === 0 ? (
                            <Text variant="headingLg" as="h4">
                              {click}
                            </Text>
                          ) : null
                        )}
                      </BlockStack>
                    </InlineStack>
                  </InlineGrid>
                </Card>
              </BlockStack>
            </Layout.Section>
          </Layout>
        </Page>
        {/* ) : (
          <Spinner accessibilityLabel="Spinner example" size="large" />
        )} */}
      </Frame>
    </div>
  );
};

export default NewDashboard;
