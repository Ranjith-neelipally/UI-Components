import { RootContainerProps } from "./helpers";
import { RootContainerStyles } from "./styles";

function RootElement({
  $backgroundColor = "#dddad0",
  children,
  className,
  id,
}: RootContainerProps) {
  return (
    <RootContainerStyles
      $backgroundColor={$backgroundColor}
      className={className}
      id={id}
    >
      {children}
    </RootContainerStyles>
  );
}

export default RootElement;
