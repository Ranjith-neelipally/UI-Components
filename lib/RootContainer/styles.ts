import styled from "styled-components";
import { RootContainerProps } from "./helpers";

export const RootContainerStyles = styled.div<RootContainerProps>`
  background-color: ${({ $backgroundColor }) => $backgroundColor || "white"};
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${({ $padding }) => $padding || "2% clamp(12px, 8%, 160px)"};
`;
