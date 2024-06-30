import { styled } from "../main";
import { CardProps } from "./helpers";

export const CardStyles = styled.div<CardProps>`
  background-color: ${({ $backgroundColor }) => $backgroundColor || "white"};
  color: ${({ $fontColor }) => $fontColor || "black"};
  font-size: ${({ $fontSize }) => $fontSize || "1rem"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "normal"};
  text-align: ${({ $textAlign }) => $textAlign || "left"};
  padding: ${({ $padding }) => $padding || "0"};
  margin: ${({ $margin }) => $margin || "0"};
  border: ${({ $border }) => $border || "0"};
  border-radius: ${({ $borderRadius }) => $borderRadius || "12px"};
  display: ${({ $display }) => $display || "flex"};
`;
