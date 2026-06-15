import React, { forwardRef } from "react";
import { InputWrapper, StyledInput, Label, ErrorMessage } from "./styles";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, success, fullWidth = true, icon, disabled, ...props }, ref) => {
    return (
      <InputWrapper $fullWidth={fullWidth} $disabled={disabled}>
        {label && <Label>{label}</Label>}
        <div style={{ position: "relative", width: "100%", display: "flex", alignItems: "center" }}>
          {icon && (
            <div
              style={{
                position: "absolute",
                left: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              {icon}
            </div>
          )}
          <StyledInput
            ref={ref}
            $error={!!error}
            $success={success}
            $hasIcon={!!icon}
            disabled={disabled}
            {...props}
          />
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputWrapper>
    );
  }
);

Input.displayName = "Input";

export default Input;
