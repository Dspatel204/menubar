import {
  Layout,
  Page,
  Text,
  Box,
  Card,
  Button,
  Icon,
  InlineStack,
  Divider,
  List,
  ButtonGroup,
  BlockStack,
  Collapsible,
} from "@shopify/polaris";
import { StarFilledMinor } from "@shopify/polaris-icons";
import React, { useState } from "react";
import "./assets/css/style.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [ShowDetails, setShowDetails] = useState(false);
  const [AppEnable, setAppEnable] = useState(false);

  const navigate = useNavigate();
  const toggleDetails = () => {
    setShowDetails(!ShowDetails);
  };

  const handleappstatus = () => {
    setAppEnable(!AppEnable);
  };

  return (
    <div>
      <Page fullWidth>
        <Layout>
          <Layout.Section>
            <Card>
              <Text variant="headingLg" as="h5" fontWeight="medium">
                Let's Get Started
              </Text>
              <Box paddingBlock="500">
                <Text variant="bodyMd" as="p">
                  Awesome! Now that the app is installed successfully, you'll
                  want to get started with configuring the app
                </Text>
              </Box>
              <Divider borderColor="border" />
              <Box paddingBlock="400">
                <Text variant="headingMd" as="h5" fontWeight="medium">
                  Customize Mobile Menu Bar
                </Text>
                <div className="Polaris-SettingAction">
                  <div className="Polaris-SettingAction__Setting">
                    Start with customize option of the Mobile Menu Bar
                  </div>
                  <div className="Polaris-SettingAction__Action">
                    <Button size="large" onClick={() => navigate("/Customise")}>
                      <span className="Polaris-Button__Content">
                        <span>Customize</span>
                      </span>
                    </Button>
                  </div>
                </div>
              </Box>
              <Divider borderColor="border" />
              <Box paddingBlock="400">
                <Text variant="headingMd" as="h5" fontWeight="medium">
                  Application Status
                </Text>
                <div className="Polaris-SettingAction">
                  <div className="Polaris-SettingAction__Setting">
                    Mobile menu is
                    <span className="Polaris-TextStyle--variationPositive ">
                      &nbsp;Enabled.
                    </span>
                  </div>
                  <div className="Polaris-SettingAction__Action">
                    <Button
                      size="large"
                      onClick={handleappstatus}
                      variant={AppEnable && "primary"}
                    >
                      <span>{AppEnable ? "Enable Now" : "Disable Now"}</span>
                    </Button>
                  </div>
                </div>
              </Box>
              <Divider borderColor="border" />
              <Box paddingBlock="400">
                <Text variant="headingMd" as="h5" fontWeight="Bold">
                  Rate Us &nbsp;
                  <span>
                    <InlineStack>
                      <InlineStack gap="20" wrap={false} blockAlign="subdued">
                        <Icon source={StarFilledMinor} tone="warning" />
                        <Icon source={StarFilledMinor} tone="warning" />
                        <Icon source={StarFilledMinor} tone="warning" />
                        <Icon source={StarFilledMinor} tone="warning" />
                        <Icon source={StarFilledMinor} tone="warning" />
                      </InlineStack>
                    </InlineStack>
                  </span>
                </Text>
                <div className="Polaris-SettingAction">
                  <div className="Polaris-SettingAction__Setting">
                    How is your experience with our app? Your honest feedback
                    helps encourage us and make improvements to our app! Please
                    leave a review
                  </div>
                  <div className="Polaris-SettingAction__Action">
                    <Button size="large" variant="primary">
                      Rate Our App
                    </Button>
                  </div>
                </div>
              </Box>
            </Card>
          </Layout.Section>
          <Layout.Section variant="oneThird">
            <BlockStack gap="400">
              <Card>
                <Text as="h6" variant="headingMd" fontWeight="medium">
                  Your Account
                </Text>
                <Box paddingBlock="500">
                  <Text variant="bodyMd" as="p" fontWeight="Bold">
                    You are currently on the <strong>Premium</strong> plan
                  </Text>
                </Box>
                <Divider borderColor="border" />
                <Box padding="400">
                  <div className="Polaris-SettingAction">
                    <div className="Polaris-SettingAction__Setting">
                      Plan Details
                    </div>
                    <div className="Polaris-SettingAction__Action">
                      <Button
                        variant="plain"
                        size="large"
                        onClick={toggleDetails}
                        tone={ShowDetails && "critical"}
                      >
                        {!ShowDetails ? <span>Show</span> : <span>Hide</span>}
                      </Button>
                    </div>
                  </div>
                </Box>
                <Collapsible
                  open={ShowDetails}
                  id="basic-collapsible"
                  transition={{
                    duration: "500ms",
                    timingFunction: "ease-in-out",
                  }}
                  expandOnPrint
                >
                  <BlockStack>
                    <Text variant="bodyMd" as="p" fontWeight="regular">
                      You are currently on the <strong>Premium</strong> plan
                      with the following features
                    </Text>
                    <br />
                    <br />
                    <List type="bullet">
                      <List.Item>Choose 250+ icons</List.Item>
                      <List.Item>Choose color</List.Item>
                      <List.Item>Up to 6 Menu</List.Item>
                      <List.Item>Upload custom icon</List.Item>
                      <List.Item>Custom CSS</List.Item>
                      <List.Item>No Branding</List.Item>
                      <List.Item>Priority support</List.Item>
                    </List>
                  </BlockStack>
                </Collapsible>
              </Card>
              <Card background="bg-surface-secondary">
                <Text as="h3" variant="headingSm" fontWeight="medium">
                  Contact Support
                </Text>
                <Box paddingBlock="400">
                  <Text variant="bodyMd" as="p" fontWeight="regular">
                    Can't find what you're looking for? We're here to help! You
                    can get in touch with easily via live chat or emailing us on
                    our support mail.
                  </Text>
                </Box>
                <ButtonGroup>
                  <Button onClick={() => window.Tawk_API?.toggle()}>
                    Live Chat
                  </Button>
                  <Button variant="plain">
                    <a
                      target="_blank"
                      href="mailto:support@addigitech.com"
                      rel="noreferrer"
                    >
                      Email Us
                    </a>
                  </Button>
                </ButtonGroup>
              </Card>
            </BlockStack>
          </Layout.Section>
        </Layout>
      </Page>
    </div>
  );
};

export default Dashboard;
