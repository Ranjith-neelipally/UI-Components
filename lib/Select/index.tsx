import { useState, useRef, useEffect } from "react";
import { Badge } from "../Badge";
import { CheckIcon } from "../Icons";
import {
  SelectWrapper,
  Label,
  SelectContainer,
  StyledSelectTrigger,
  DropdownChevron,
  OptionsMenu,
  OptionItem,
  ErrorMessage,
  BadgeWrapper,
} from "./styles";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  options: SelectOption[];
  value?: string | string[];
  onChange?: (value: any) => void;
  placeholder?: string;
  error?: string;
  success?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  multiple?: boolean;
}

export const Select = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  error,
  success,
  fullWidth = true,
  disabled = false,
  multiple = false,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedValues = Array.isArray(value)
    ? value
    : value
    ? [value]
    : [];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelectOption = (val: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) return;

    if (multiple) {
      const newValues = selectedValues.includes(val)
        ? selectedValues.filter((v) => v !== val)
        : [...selectedValues, val];
      if (onChange) {
        onChange(newValues);
      }
    } else {
      if (onChange) {
        onChange(val);
      }
      setIsOpen(false);
    }
  };

  const handleRemoveValue = (val: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) return;

    const newValues = selectedValues.filter((v) => v !== val);
    if (onChange) {
      onChange(newValues);
    }
  };

  const isOptionSelected = (val: string) => {
    if (multiple) {
      return selectedValues.includes(val);
    }
    return value === val;
  };

  return (
    <SelectWrapper $fullWidth={fullWidth} $disabled={disabled} ref={containerRef}>
      {label && <Label>{label}</Label>}
      <SelectContainer>
        <StyledSelectTrigger
          $error={!!error}
          $success={success}
          $isOpen={isOpen}
          $disabled={disabled}
          onClick={handleToggle}
          style={{
            padding: multiple && selectedValues.length > 0 ? "6px 16px 6px 12px" : "12px 16px",
            minHeight: "48px",
          }}
        >
          {multiple ? (
            selectedValues.length > 0 ? (
              <BadgeWrapper>
                {selectedValues.map((val) => {
                  const opt = options.find((o) => o.value === val);
                  if (!opt) return null;
                  return (
                    <Badge
                      key={val}
                      variant="subtle"
                      colorType="primary"
                      onClose={(e) => handleRemoveValue(val, e as any)}
                    >
                      {opt.label}
                    </Badge>
                  );
                })}
              </BadgeWrapper>
            ) : (
              <span style={{ opacity: 0.7 }}>{placeholder}</span>
            )
          ) : (
            <span>
              {(() => {
                const selectedOption = options.find((opt) => opt.value === value);
                return selectedOption ? selectedOption.label : placeholder;
              })()}
            </span>
          )}
          <DropdownChevron $isOpen={isOpen}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </DropdownChevron>
        </StyledSelectTrigger>

        {isOpen && (
          <OptionsMenu>
            {options.map((opt) => (
              <OptionItem
                key={opt.value}
                $isSelected={isOptionSelected(opt.value)}
                onClick={(e) => handleSelectOption(opt.value, e)}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                  <span>{opt.label}</span>
                  {isOptionSelected(opt.value) && <CheckIcon size={16} />}
                </div>
              </OptionItem>
            ))}
          </OptionsMenu>
        )}
      </SelectContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </SelectWrapper>
  );
};

export default Select;

