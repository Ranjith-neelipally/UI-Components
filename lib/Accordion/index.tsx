import React, { useState, useRef, useEffect } from "react";
import {
  AccordionContainer,
  AccordionItemWrapper,
  AccordionHeader,
  AccordionChevron,
  AccordionContentWrapper,
  AccordionContent,
} from "./styles";
import { ChevronDownIcon } from "../Icons";

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const AccordionItem = ({ title, children, isOpen = false, onToggle }: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, children]);

  return (
    <AccordionItemWrapper>
      <AccordionHeader $isOpen={isOpen} onClick={onToggle} type="button">
        <span>{title}</span>
        <AccordionChevron $isOpen={isOpen}>
          <ChevronDownIcon size={18} />
        </AccordionChevron>
      </AccordionHeader>
      <AccordionContentWrapper $isOpen={isOpen} $maxHeight={maxHeight}>
        <div ref={contentRef}>
          <AccordionContent>{children}</AccordionContent>
        </div>
      </AccordionContentWrapper>
    </AccordionItemWrapper>
  );
};

export interface AccordionProps {
  children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[];
  allowMultiple?: boolean;
}

export const Accordion = ({ children, allowMultiple = false }: AccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <AccordionContainer>
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) return null;

        const isItemOpen = openIndexes.includes(idx);
        return React.cloneElement(child, {
          isOpen: isItemOpen,
          onToggle: () => handleToggle(idx),
        } as AccordionItemProps);
      })}
    </AccordionContainer>
  );
};

export default Accordion;
