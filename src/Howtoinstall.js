import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  Collapsible,
  FormLayout,
  Icon,
  List,
  Page,
  Text,
} from "@shopify/polaris";
import {
  ChevronDownMinor,
  ChevronRightMinor,
  ExternalMinor,
} from "@shopify/polaris-icons";
import Theme from "../src/assets/image/step_4.png";
import "./assets/css/style.css";
import { useNavigate } from "react-router-dom";

const Howtoinstall = () => {
  const [Enablemenu, setEnablemenu] = useState(true);
  const Navigate = useNavigate();
  useEffect(() => {
    Navigate("/Howtoinstall");
    console.log("45652");
  }, [Navigate]);
  const handleToggle = () => {
    setEnablemenu(!Enablemenu);
  };
  return (
    <div>
      <Page fullWidth>
        <Card>
          <Text variant="headingMd" as="h2">
            Instructions
          </Text>
          <Box padding={400}>
            <div className="heading-panel">
              <div style={{ alignItems: "flex-start", width: "100%" }}>
                <Text variant="headingMd" as="h2">
                  How to Enable Mobile Menu bar?
                </Text>
              </div>
              <div className="headingbtn-end">
                <Button
                  variant="plain"
                  onClick={handleToggle}
                  ariaExpanded={Enablemenu}
                  ariaControls="basic-collapsible"
                >
                  <Icon
                    source={!Enablemenu ? ChevronRightMinor : ChevronDownMinor}
                    tone="subdued"
                  />
                </Button>
              </div>
            </div>
            <FormLayout>
              <FormLayout.Group>
                <Collapsible
                  open={Enablemenu}
                  id="basic-collapsible"
                  transition={{
                    duration: "500ms",
                    timingFunction: "ease-in-out",
                  }}
                  expandOnPrint
                >
                  <Card roundedAbove="xl">
                    <FormLayout>
                      <List type="number">
                        <List.Item>
                          <strong>Show Mobile Menu bar,</strong>
                        </List.Item>
                        <br />
                        <Button
                          variant="primary"
                          external
                          url="https://ad-mobile-menu-bar.myshopify.com/admin/themes/current/editor?context=apps&amp;activateAppId=857321f0-0d5b-44fd-b2d8-80b529b52cb1/app-embed"
                          target="_blank"
                          icon={ExternalMinor}
                        >
                          <span>&nbsp;&nbsp;Go to Shopify Theme Editor</span>
                        </Button>
                        <br />
                        <br />
                        <List.Item>Then click on it Save.</List.Item>
                      </List>
                      {/* <br /> */}
                      <img src={Theme} alt="" className="theme-img" />
                    </FormLayout>
                  </Card>
                </Collapsible>
              </FormLayout.Group>
            </FormLayout>
          </Box>
        </Card>
      </Page>
    </div>
  );
};

export default Howtoinstall;
