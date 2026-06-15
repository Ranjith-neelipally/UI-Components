
import { StyledDivider } from "./styles";

export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  thickness?: string | number;
  color?: string;
  margin?: string | number;
}

export const Divider = ({
  orientation = "horizontal",
  thickness = "1px",
  color,
  margin = "16px 0",
}: DividerProps) => {
  return (
    <StyledDivider
      $orientation={orientation}
      $thickness={thickness}
      $color={color}
      $margin={margin}
    />
  );
};

export default Divider;
