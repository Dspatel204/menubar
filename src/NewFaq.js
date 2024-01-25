import React, { useEffect, useState } from "react";
import { faqItems } from "./Faqitems";
import { useNavigate } from "react-router-dom";
import {
  BlockStack,
  Box,
  Button,
  Card,
  Collapsible,
  FormLayout,
  Grid,
  Icon,
  InlineGrid,
  Link,
  List,
  Page,
  Text,
} from "@shopify/polaris";
import { CirclePlusMajor, CircleMinusMajor } from "@shopify/polaris-icons";
import Faq2 from "./assets/image/faq2.png";

const NewFaq = () => {
  const [faqStates, setFaqStates] = useState(
    faqItems.map((item, index) => ({ open: index === 0 }))
  );
  const Navigate = useNavigate();

  useEffect(() => {
    Navigate("/faqacc");
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
      <Page>
        <Text variant="headingLg" as="h5" fontWeight="medium">
          FAQ
        </Text>
        <Box paddingBlock={600}>
          <BlockStack gap={400}>
            {faqItems?.map((faqItem, index) => (
              <Card padding="600">
                <InlineGrid columns={2}>
                  <Text variant="headingMd" as="h2" fontWeight="regular">
                    {faqItem.question}
                  </Text>
                  <BlockStack inlineAlign="end">
                    <div className="rightdown">
                      <Button
                        variant="plain"
                        onClick={() => handleFaqToggle(index)}
                        ariaExpanded={faqStates[index].open}
                        ariaControls={`collapseFaq${index}`}
                        icon={
                          !faqStates[index].open
                            ? CirclePlusMajor
                            : CircleMinusMajor
                        }
                      ></Button>
                      <br />
                    </div>
                  </BlockStack>
                </InlineGrid>
                <Collapsible
                  open={faqStates[index].open}
                  id="basic-collapsible"
                  transition={{
                    duration: "1000ms",
                    timingFunction: "ease-in-out",
                  }}
                  expandOnPrint
                >
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
                </Collapsible>
              </Card>
            ))}
          </BlockStack>
        </Box>
      </Page>
    </div>
  );
};

export default NewFaq;
