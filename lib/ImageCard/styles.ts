import styled, { css } from "styled-components";
import { getThemeColors } from "../colors";

export const CardWrapper = styled.div<{ $hasClick: boolean; $hoverEffect: "zoom" | "lift" | "fade" | "none" }>`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${(props) => getThemeColors(props).surfaceHigh};
  border: 1px solid ${(props) => getThemeColors(props).primaryHigh}40;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: ${({ $hasClick }) => ($hasClick ? "pointer" : "default")};

  ${({ $hoverEffect, ...props }) => {
    if ($hoverEffect === "none") return "";
    return css`
      &:hover {
        border-color: ${getThemeColors(props).primary}80;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        ${$hoverEffect === "lift" && "transform: translateY(-4px);"}

        .image-bg {
          transform: ${$hoverEffect === "zoom" ? "scale(1.05)" : "scale(1)"};
          filter: ${$hoverEffect === "fade" ? "brightness(0.75)" : "brightness(0.95)"};
        }
      }
    `;
  }}
`;

export const ImageContainer = styled.div<{ $imageUrl: string; $aspectRatio: string }>`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease, filter 0.5s ease;
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.4) 100%);
  pointer-events: none;
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Subtitle = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${(props) => getThemeColors(props).primary};
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: ${(props) => getThemeColors(props).primaryText};
  line-height: 1.4;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  color: ${(props) => getThemeColors(props).secondaryTextHigh};
  flex-grow: 1;
`;

export const CardFooter = styled.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid ${(props) => getThemeColors(props).primaryHigh}20;
  display: flex;
  align-items: center;
`;
