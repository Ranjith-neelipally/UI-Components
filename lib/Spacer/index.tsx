
import { StyledSpacer } from "./styles";

export interface SpacerProps {
  x?: string | number;
  y?: string | number;
  flex?: string | number;
}

export const Spacer = ({ x, y, flex }: SpacerProps) => {
  return <StyledSpacer $x={x} $y={y} $flex={flex} />;
};

export default Spacer;
