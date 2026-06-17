import { ConentContainerProps } from "./helpers";
import { MainContent } from "./styles";

function ContentWrapper({ children, $backgroundColor, $overflow, $gap }: ConentContainerProps) {
  return (
    <MainContent $backgroundColor={$backgroundColor} $overflow={$overflow} $gap={$gap}>
      {children}
    </MainContent>
  );
}

export default ContentWrapper;
