import styled from "styled-components";
import { ConentContainerProps } from "./helpers";
import { getThemeColors } from "../colors";

export const MainContent = styled.section<ConentContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.$backgroundColor || getThemeColors(props).primaryHigh};
  padding: ${(props) => props.$padding || "28px 24px"};
  gap: ${(props) => props.$gap || 0};
  overflow: ${(props) => props.$overflow || "auto"};
  border-radius: ${(props) => props.$borderRadius || "16px"};
  flex: 1;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.03);
`;
