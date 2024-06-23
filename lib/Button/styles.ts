import styled from "styled-components";

export const ButtonStyles = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: #0056b3;
  }
`;

interface CardProps {
  $themecolor?: string;
}

export const CardStyles = styled.div<CardProps>`
  background-color: ${(props) => props.$themecolor || "white"};
`;

