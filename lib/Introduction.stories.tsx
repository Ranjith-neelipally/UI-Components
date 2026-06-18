import React from "react";
import { Meta } from "@storybook/react";
import { Heading, Paragraph, Card, Grid, Col, Badge, Divider, Spacer } from "./main";

const meta: Meta = {
  title: "Introduction",
};

export default meta;

export const Welcome: React.FC = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Heading level={1}>My Material Theme UI</Heading>
        <Badge>v1.0.173</Badge>
      </div>
      <Spacer y={8} />
      <Paragraph>
        Welcome to the component library! This collection is built with **React**, **TypeScript**, and **Styled Components**, styled using the elegant **Poppins** font family.
      </Paragraph>
      <Spacer y={24} />

      <Card $padding="24px">
        <Heading level={3}>🎨 Dynamic Color Engine</Heading>
        <Spacer y={12} />
        <Paragraph>
          The core feature of this library is its **intelligent, contrast-safe HSL color generator**. 
          By providing just a single primary seed color, the engine automatically calculates surfaces, borders, backgrounds, warning states, and highly accessible text contrasts.
        </Paragraph>
        <Spacer y={12} />
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "14px", fontWeight: 600 }}>👉 Try it:</span>
          <span style={{ fontSize: "13px" }}>
            Click the floating palette icon in the top-right corner of the Storybook screen to change the seed color and watch all components update instantly!
          </span>
        </div>
      </Card>

      <Spacer y={32} />
      <Heading level={2}>Component Categories</Heading>
      <Divider margin="16px 0" />

      <Grid columns={2} gap="20px">
        <Col span={1}>
          <div style={{ height: "100%" }}>
            <Card>
              <Heading level={4}>🏗️ Layout</Heading>
              <Spacer y={8} />
              <Paragraph>
                Responsive structural elements to form pages:
                <br />
                • Grid & Col, ContentWrapper, Divider, Spacer, RootContainer.
              </Paragraph>
            </Card>
          </div>
        </Col>
        <Col span={1}>
          <div style={{ height: "100%" }}>
            <Card>
              <Heading level={4}>🧭 Navigation</Heading>
              <Spacer y={8} />
              <Paragraph>
                Components to guide users through routes:
                <br />
                • TopNavBar, Breadcrumbs, Pagination, and the recursive SideNav.
              </Paragraph>
            </Card>
          </div>
        </Col>
        <Col span={1}>
          <div style={{ height: "100%" }}>
            <Card>
              <Heading level={4}>📝 Forms & Inputs</Heading>
              <Spacer y={8} />
              <Paragraph>
                Accessible controls for capturing user data:
                <br />
                • Input, TextArea, Select, Checkbox, Radio, Switch, Slider, FileUpload.
              </Paragraph>
            </Card>
          </div>
        </Col>
        <Col span={1}>
          <div style={{ height: "100%" }}>
            <Card>
              <Heading level={4}>🔔 Feedback & Display</Heading>
              <Spacer y={8} />
              <Paragraph>
                Alerts and interactive elements:
                <br />
                • Modal, Toast, Spinner, Banner, Tooltip, Badge, Table, Accordion.
              </Paragraph>
            </Card>
          </div>
        </Col>
      </Grid>
    </div>
  );
};
