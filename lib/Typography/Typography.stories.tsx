import { Meta } from "@storybook/react";
import { Heading, Paragraph, Caption, HighlightText } from "../main";

const meta: Meta = {
  title: "Typography/Elements",
};

export default meta;

export const Headings = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <Heading level={1}>Heading Level 1 (H1)</Heading>
    <Heading level={2}>Heading Level 2 (H2)</Heading>
    <Heading level={3}>Heading Level 3 (H3)</Heading>
    <Heading level={4}>Heading Level 4 (H4)</Heading>
    <Heading level={5}>Heading Level 5 (H5)</Heading>
    <Heading level={6}>Heading Level 6 (H6)</Heading>
  </div>
);

export const Paragraphs = () => (
  <div style={{ maxWidth: "480px" }}>
    <Paragraph>
      This is a standard body paragraph component. It renders clean, readable typography with proper line-height spacing and margins for long-form narrative.
    </Paragraph>
  </div>
);

export const CaptionsAndHighlights = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
    <Caption>Fig 1.1 - Micro description caption label text</Caption>
    <div>
      This text features a <HighlightText>highlighted term</HighlightText> to draw special visual attention.
    </div>
  </div>
);
