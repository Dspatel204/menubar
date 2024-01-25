import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Collapsible,
  Page,
  Box,
  Text,
  List,
  Icon,
  FormLayout,
  Link,
} from "@shopify/polaris";
import { ChevronDownMinor, ChevronRightMinor } from "@shopify/polaris-icons";
import { faqItems } from "./Faqitems";
import Faq2 from "./assets/image/faq2.png";
import { useNavigate } from "react-router-dom";

const Faq = () => {
  const [faqStates, setFaqStates] = useState(
    faqItems.map((item, index) => ({ open: index === 0 }))
  );
  const Navigate = useNavigate();
  useEffect(() => {
    Navigate("/faq");
    console.log("45652");
  }, [Navigate]);

  const handleFaqToggle = (index) => {
    setFaqStates((prevStates) =>
      prevStates.map((state, i) => ({
        ...state,
        open: i === index ? !state.open : false,
      }))
    );
  };

  return (
    <div>
      <Page fullWidth>
        <Card>
          <Text variant="headingMd" as="h5">
            FAQs
          </Text>
          <Box padding={400}>
            {faqItems?.map((faqItem, index) => (
              <Box padding="100" key={index}>
                <div className="heading-panel">
                  <Text variant="headingMd" as="h2" fontWeight="regular">
                    {faqItem.question}
                  </Text>
                  <div className="rightdown">
                    <Button
                      variant="plain"
                      onClick={() => handleFaqToggle(index)}
                      ariaExpanded={faqStates[index].open}
                      ariaControls={`collapseFaq${index}`}
                    >
                      <Icon
                        tone="subdued"
                        source={
                          !faqStates[index].open
                            ? ChevronRightMinor
                            : ChevronDownMinor
                        }
                      />
                    </Button>
                    <br />
                  </div>
                </div>
                <Collapsible
                  open={faqStates[index].open}
                  id="basic-collapsible"
                  transition={{
                    duration: "500ms",
                    timingFunction: "ease-in-out",
                  }}
                  expandOnPrint
                >
                  <Card roundedAbove="xl">
                    <FormLayout>
                      {faqItem.listtitle?.map((title) => (
                        <Text key={title} as="p">
                          {title}
                        </Text>
                      ))}
                      {faqItem.numberlist ? (
                        <List type="number">
                          {faqItem.numberlist?.map((item, id) => (
                            <List.Item key={id}>
                              <strong>{item}</strong>
                            </List.Item>
                          ))}
                        </List>
                      ) : null}
                      {index === 1 && <img src={Faq2} alt="" />}
                      {faqItem.bulletlist ? (
                        <List type="bullet">
                          {console.log(faqItem.bulletlist)}
                          {faqItem.bulletlist?.map((item, id) => (
                            <List.Item key={id}>
                              {item}
                              {/* <Link url={item}>{item}</Link> */}
                            </List.Item>
                          ))}
                        </List>
                      ) : null}
                      {faqItem.menutext ? (
                        <Text as="p">
                          Please double check that the<b>"http://"</b> OR{" "}
                          <b>"https://"</b> is in your link
                        </Text>
                      ) : null}
                      {faqItem.heading ? <Text>{faqItem.heading}</Text> : null}
                      {faqItem.rednotes ? (
                        <Text as="p" tone="critical">
                          {faqItem.rednotes}
                        </Text>
                      ) : null}
                      {faqItem.answer?.map((paragraph, paragraphIndex) =>
                        paragraph ? (
                          <Text key={paragraphIndex} as="p">
                            {paragraph}
                          </Text>
                        ) : null
                      )}
                      {faqItem.contactlink ? (
                        <div>
                          <Text as="p">Yes of course we can :)</Text>
                          <Text as="p">
                            Send us an email to
                            <Link
                              removeUnderline
                              url="mailto:support@addigitech.com"
                              target="_blank"
                            >
                              &nbsp;support@addigitech.com&nbsp;
                            </Link>
                            or contact us via the
                            <Link
                              removeUnderline
                              onClick={() => window.Tawk_API?.toggle()}
                              target="_blank"
                            >
                              &nbsp;live chat support&nbsp;
                            </Link>
                            at the bottom right corner of the screen.
                          </Text>
                        </div>
                      ) : null}
                      {faqItem.supportlink ? (
                        <Text as="p">
                          Sure, send an email to
                          <Link
                            removeUnderline
                            url="mailto:support@addigitech.com"
                            target="_blank"
                          >
                            &nbsp;support@addigitech.com.
                          </Link>
                        </Text>
                      ) : null}
                    </FormLayout>
                  </Card>
                </Collapsible>
              </Box>
            ))}
          </Box>
        </Card>
      </Page>
    </div>
  );
};

export default Faq;
