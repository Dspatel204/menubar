import {
  Badge,
  ButtonGroup,
  FullscreenBar,
  Button,
  Text,
  Page,
} from "@shopify/polaris";
import React, { useState, useCallback, useEffect } from "react";
import Customise from "./Customise";
import { useNavigate } from "react-router-dom";
import { useAppBridge } from "@shopify/app-bridge-react";
import { Fullscreen } from "@shopify/app-bridge/actions";

function FullscreenBarExample() {
  const [isFullscreen, setFullscreen] = useState(true);

  const handleActionClick = useCallback(() => {
    setFullscreen(false);
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/FullscreenBar");
    console.log("45652");
  }, [navigate]);

  const fullscreenBarMarkup = (
    <FullscreenBar onAction={handleActionClick}>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div style={{ marginLeft: "1rem", flexGrow: 1 }}>
          <Text variant="headingLg" as="p">
            Mobile Menu Customiser
          </Text>
        </div>
      </div>
    </FullscreenBar>
  );

  return (
    <div style={{ width: "100%" }}>
      {isFullscreen && fullscreenBarMarkup}
      <div>
        {!isFullscreen && (
          <Button onClick={() => setFullscreen(true)}>Go Fullscreen</Button>
        )}
        <div className="fullscreen">
          <Customise />
        </div>
      </div>
    </div>
  );
}
export default FullscreenBarExample;
