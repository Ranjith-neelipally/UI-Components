import React, { forwardRef } from "react";
import { TextAreaWrapper, StyledTextArea, Label, ErrorMessage } from "./styles";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  success?: boolean;
  fullWidth?: boolean;
  rows?: number;
  resizable?: "none" | "both" | "horizontal" | "vertical";
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, success, fullWidth = true, rows = 4, resizable = "vertical", disabled, ...props }, ref) => {
    return (
      <TextAreaWrapper $fullWidth={fullWidth} $disabled={disabled}>
        {label && <Label>{label}</Label>}
        <StyledTextArea
          ref={ref}
          $error={!!error}
          $success={success}
          $resizable={resizable}
          rows={rows}
          disabled={disabled}
          {...props}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </TextAreaWrapper>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
