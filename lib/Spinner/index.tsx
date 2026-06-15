import { StyledSpinner } from "./styles";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg" | number;
  colorType?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "white";
  thickness?: number;
}

export const Spinner = ({ size = "md", colorType = "primary", thickness = 3, ...props }: SpinnerProps) => {
  return <StyledSpinner $size={size} $colorType={colorType} $thickness={thickness} {...props} />;
};

export default Spinner;
