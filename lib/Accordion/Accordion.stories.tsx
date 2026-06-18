import { Meta } from "@storybook/react";
import { Accordion, AccordionItem } from "../main";

const meta: Meta = {
  title: "Feedback/Accordion",
  component: Accordion,
};

export default meta;

export const SingleSelection = () => (
  <div style={{ maxWidth: "480px" }}>
    <Accordion allowMultiple={false}>
      <AccordionItem title="Can I customize theme colors?">
        Yes! Simply enter a hex color in the header input panel, and TinyColor calculations will regenerate all contrast and theme colors dynamically.
      </AccordionItem>
      <AccordionItem title="Are these components accessible?">
        We aim to provide solid support for accessible forms, screen reader helper labels, and keyboard events out of the box.
      </AccordionItem>
      <AccordionItem title="What dependencies are required?">
        The project relies on React 18, Styled Components v6, and TinyColor2 for color calculations.
      </AccordionItem>
    </Accordion>
  </div>
);

export const AllowMultipleOpen = () => (
  <div style={{ maxWidth: "480px" }}>
    <Accordion allowMultiple={true}>
      <AccordionItem title="Accordion Panel Section A">
        This panel can stay open even when other panels are expanded by the user.
      </AccordionItem>
      <AccordionItem title="Accordion Panel Section B">
        Multiple panels can be open simultaneously to compare data.
      </AccordionItem>
    </Accordion>
  </div>
);
