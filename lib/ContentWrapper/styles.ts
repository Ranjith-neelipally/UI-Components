import styled from "styled-components";
import { ConentContainerProps } from "./helpers";
import { ThemeColors } from "../colors";

export const MainContent = styled.section<ConentContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.$backgroundColor || ThemeColors.primaryHigh};
  padding: ${(props) => props.$padding || "28px 24px"};
  border-radius: ${(props) => props.$borderRadius || "12px"};
  flex: 1;
  overflow: auto;
`;
