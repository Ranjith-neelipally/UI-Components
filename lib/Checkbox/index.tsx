import React, { forwardRef } from "react";
import { CheckboxWrapper, HiddenInput, StyledCheckbox } from "./styles";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  children?: React.ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, checked = false, disabled, onChange, ...props }, ref) => {
    return (
      <CheckboxWrapper $disabled={disabled}>
        <HiddenInput
          ref={ref}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          {...props}
        />
        <StyledCheckbox $checked={checked} $disabled={disabled}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </StyledCheckbox>
        {children && <span>{children}</span>}
      </CheckboxWrapper>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
