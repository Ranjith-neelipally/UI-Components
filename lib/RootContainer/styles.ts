import styled from "styled-components";
import { RootContainerProps } from "./helpers";

export const RootContainerStyles = styled.div<RootContainerProps>`
  background-color: ${({ $backgroundColor }) => $backgroundColor || "white"};
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection || "column"};
  flex: 1;
  padding: ${({ $padding }) => $padding || "2% clamp(12px, 8%, 160px)"};
  gap: ${({ $gap }) => $gap || "clamp(12px, 8%, 28px)"};
  @media screen and (max-width: 768px) {
    padding: 12px 16px;
    gap: 16px;
  }
`;
