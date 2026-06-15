import React, { forwardRef } from "react";
import { SliderContainer, LabelWrapper, ValueDisplay, StyledRangeInput } from "./styles";

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  showValue?: boolean;
  fullWidth?: boolean;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ label, showValue = true, fullWidth = true, value, min = 0, max = 100, onChange, ...props }, ref) => {
    return (
      <SliderContainer $fullWidth={fullWidth}>
        {(label || showValue) && (
          <LabelWrapper>
            {label && <span>{label}</span>}
            {showValue && <ValueDisplay>{value}</ValueDisplay>}
          </LabelWrapper>
        )}
        <StyledRangeInput
          ref={ref}
          value={value}
          min={min}
          max={max}
          onChange={onChange}
          {...props}
        />
      </SliderContainer>
    );
  }
);

Slider.displayName = "Slider";

export default Slider;
