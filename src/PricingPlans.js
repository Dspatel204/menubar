import {
  BlockStack,
  Button,
  Card,
  Divider,
  ExceptionList,
  Frame,
  Icon,
  Layout,
  Link,
  Modal,
  Page,
  Text,
  Toast,
} from "@shopify/polaris";
import { CancelMinor, TickMinor } from "@shopify/polaris-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "./config";

const PricingPlans = () => {
  const [downgrade, setdowngrade] = useState(false);
  const [redirecturl, setredirecturl] = useState("");
  const [plan, setplan] = useState("");
  const Navigate = useNavigate();
  useEffect(() => {
    Navigate("/PricingPlans");
    console.log("45652");
    return async () => {
      const { data } = await axios.get(
        `${config.api_endpoint}/dashboard/shop/app/status?shop=${config.shop_name}`
      );
      setplan(data.data.app_plan === "1");
      console.log(data.data.app_plan, "4652");
    };
  }, []);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [visible]);

  const downgradeplan = async () => {
    const data = await axios.get(
      `${config.api_endpoint}/plan/app/downgrade?shop=${config.shop_name}`
    );
    console.log(data.data.redirect_url);
    if (data.status === "200") {
      setVisible(true);
    }
    // window.location.href = data.data.redirect_url;
    setredirecturl(data.data.redirect_url);
    window.open(data.data.redirect_url);
  };
  const handleupgrade = async () => {
    const data = await axios.get(
      `${config.api_endpoint}/plan/app/upgrade?shop=${config.shop_name}`
      // {
      //   shop: config.shop_name,
      // }
    );
    // window.location.href = data.data.redirect_url;
    // setredirecturl(data.data.redirect_url);
    window.open(data.data.redirect_url);
    console.log(data, ";;");
  };

  return (
    <div>
      <Frame>
        {visible ? <Toast content="You Have Downgraded successfully" /> : null}
        <Page>
          <Layout>
            <Layout.Section>
              <div className="heading">
                <Text
                  variant="heading2xl"
                  as="p"
                  alignment="center"
                  fontWeight="medium"
                >
                  Pricing Plans
                </Text>
                <br />
              </div>
            </Layout.Section>
            <div className="pricing">
              <Layout.Section>
                <div className="price-chart-item">
                  <Card title="Sales">
                    <Modal
                      size="small"
                      open={downgrade}
                      onClose={() => setdowngrade(!downgrade)}
                      title="Cancel booking"
                      primaryAction={{
                        content: "yes",
                        onAction: downgradeplan,
                      }}
                      secondaryActions={[
                        {
                          content: "cancel",
                          onAction: () => setdowngrade(!downgrade),
                        },
                      ]}
                    >
                      <Modal.Section>
                        <Text as="p">
                          Are you sure you want to downgrade the plan? Note:
                          When you downgrade the plan you are lose your Premium
                          plan features And also lose Premium Icon and Uploaded
                          images. This action cannot be reversed.
                        </Text>
                      </Modal.Section>
                    </Modal>
                    <BlockStack>
                      <Text variant="heading2xl" as="h3" fontWeight="regular">
                        <span className="money">$0.00</span>
                        <em>/month</em>
                      </Text>
                      <Text
                        variant="headingSm"
                        as="h3"
                        fontWeight="semibold"
                        alignment="center"
                      >
                        FREE
                      </Text>
                      <p className="hidden-field">
                        <br />
                        <br />
                      </p>
                      <Button
                        fullWidth
                        variant="Primary"
                        onClick={() => setdowngrade(!downgrade)}
                        disabled={!plan}
                      >
                        Downgrade Now
                      </Button>
                    </BlockStack>
                    <Divider />
                    <ExceptionList
                      items={[
                        {
                          icon: TickMinor,
                          description: "Choose 10+ icons",
                        },
                        {
                          icon: TickMinor,
                          description: "Choose color",
                        },
                        {
                          icon: TickMinor,
                          description: "Up to 3 Menu",
                        },
                        {
                          icon: TickMinor,
                          description: "Custom CSS",
                        },
                        {
                          icon: () => (
                            <div className="cross-icon">
                              <Icon source={CancelMinor} tone="critical" />
                            </div>
                          ),
                          description: "Upload custom icon",
                        },
                        {
                          icon: () => (
                            <div className="cross-icon">
                              <Icon source={CancelMinor} tone="critical" />
                            </div>
                          ),
                          description: "No Branding",
                        },
                        {
                          icon: TickMinor,
                          description: "Priority support",
                        },
                      ]}
                    />
                  </Card>
                </div>
              </Layout.Section>
              <Layout.Section>
                <div className="price-chart-item">
                  <Card>
                    <BlockStack>
                      <Text variant="heading2xl" as="h3" fontWeight="regular">
                        <span className="money">$3.95</span>
                        <em>/month</em>
                      </Text>
                      <Text
                        variant="headingSm"
                        as="h3"
                        fontWeight="semibold"
                        alignment="center"
                      >
                        PREMIUM
                      </Text>
                      <p className="hidden-field">
                        <br />
                        <br />
                      </p>
                      <Button
                        fullWidth
                        variant="Primary"
                        onClick={() => handleupgrade()}
                        // onClick={downgradeplan}
                        disabled={plan}
                      >
                        upgrade now
                      </Button>
                    </BlockStack>
                    <Divider />
                    <ExceptionList
                      items={[
                        {
                          icon: TickMinor,
                          description: "Choose 250+ icons",
                        },
                        {
                          icon: TickMinor,
                          description: "Choose color",
                        },
                        {
                          icon: TickMinor,
                          description: "Up to 6 Menu",
                        },
                        {
                          icon: TickMinor,
                          description: "Custom CSS",
                        },
                        {
                          icon: TickMinor,
                          description: "Upload custom icon",
                        },
                        {
                          icon: TickMinor,
                          description: "No Branding",
                        },
                        {
                          icon: TickMinor,
                          description: "Priority support",
                        },
                      ]}
                    />
                  </Card>
                </div>
              </Layout.Section>
            </div>
          </Layout>
        </Page>
      </Frame>
    </div>
  );
};

export default PricingPlans;
