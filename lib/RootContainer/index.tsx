import { RootContainerProps } from "./helpers";
import { RootContainerStyles } from "./styles";

function RootElement({
  $backgroundColor = "#dddad0",
  children,
  className,
  id,
  $gap,
}: RootContainerProps) {
  return (
    <RootContainerStyles
      $backgroundColor={$backgroundColor}
      className={className}
      id={id}
      $gap={$gap}
    >
      {children}
    </RootContainerStyles>
  );
}

export default RootElement;
