import styled from "styled-components";
import { AvatarProps } from "./helpers";
import { getThemeColors } from "../colors";

export const AvatarContainer = styled.div<AvatarProps>`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-size: cover;
  background-position: center;
  border: 1px solid ${({ $borderColor, ...props }) => $borderColor || getThemeColors(props).primaryHigh};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  background-color: ${({ $backgroundColor, $imageUrl }) =>
    $backgroundColor && !$imageUrl ? $backgroundColor : "transparent"};
  cursor: pointer;
  color: ${({ $textColor, ...props }) => $textColor || getThemeColors(props).primaryText};
  font-family: "Nunito", sans-serif;
`;

