import React, { forwardRef } from "react";
import { SwitchWrapper, HiddenInput, StyledTrack, StyledThumb } from "./styles";

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  children?: React.ReactNode;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ children, checked = false, disabled, onChange, ...props }, ref) => {
    return (
      <SwitchWrapper $disabled={disabled}>
        <HiddenInput
          ref={ref}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          {...props}
        />
        <StyledTrack $checked={checked} $disabled={disabled}>
          <StyledThumb $checked={checked} />
        </StyledTrack>
        {children && <span>{children}</span>}
      </SwitchWrapper>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;
