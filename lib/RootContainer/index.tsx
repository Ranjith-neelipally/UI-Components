import { RootContainerProps } from "./helpers";
import { RootContainerStyles } from "./styles";

function RootElement({
  $backgroundColor = "#dddad0",
  children,
  className,
  id,
  $gap,
  $flexDirection,
  $padding,
}: RootContainerProps) {
  return (
    <RootContainerStyles
      $backgroundColor={$backgroundColor}
      className={className}
      id={id}
      $gap={$gap}
      $flexDirection={$flexDirection}
      $padding={$padding}
    >
      {children}
    </RootContainerStyles>
  );
}

export default RootElement;
