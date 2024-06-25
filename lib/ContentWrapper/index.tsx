import { ConentContainerProps } from "./helpers";
import { MainContent } from "./styles";

function ContentWrapper({ children, $backgroundColor }: ConentContainerProps) {
  return (
    <MainContent $backgroundColor={$backgroundColor}>{children}</MainContent>
  );
}

export default ContentWrapper;
