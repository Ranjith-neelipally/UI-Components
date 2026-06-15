import React, { createContext, useContext, forwardRef } from "react";
import { RadioGroupContainer, RadioWrapper, HiddenInput, StyledRadio } from "./styles";

interface RadioGroupContextType {
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextType | null>(null);

export interface RadioGroupProps {
  children: React.ReactNode;
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  direction?: "row" | "column";
  disabled?: boolean;
}

export const RadioGroup = ({
  children,
  name,
  value,
  onChange,
  direction = "column",
  disabled = false,
}: RadioGroupProps) => {
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <RadioGroupContext.Provider value={{ name, value, onChange: handleRadioChange, disabled }}>
      <RadioGroupContainer $direction={direction}>{children}</RadioGroupContainer>
    </RadioGroupContext.Provider>
  );
};

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  value: string;
  children?: React.ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ children, value, checked, disabled, onChange, ...props }, ref) => {
    const groupContext = useContext(RadioGroupContext);

    const isGrouped = !!groupContext;
    const finalChecked = isGrouped ? groupContext.value === value : checked;
    const finalDisabled = isGrouped ? groupContext.disabled || disabled : disabled;
    const finalName = isGrouped ? groupContext.name : props.name;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e);
      if (groupContext && groupContext.onChange) groupContext.onChange(e);
    };

    return (
      <RadioWrapper $disabled={finalDisabled}>
        <HiddenInput
          ref={ref}
          name={finalName}
          value={value}
          checked={finalChecked}
          disabled={finalDisabled}
          onChange={handleChange}
          {...props}
        />
        <StyledRadio $checked={!!finalChecked} $disabled={finalDisabled} />
        {children && <span>{children}</span>}
      </RadioWrapper>
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
