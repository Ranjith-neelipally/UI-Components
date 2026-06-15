import styled from "styled-components";
import { CardProps } from "./helpers";
import { getThemeColors } from "../colors";

export const CardStyles = styled.div<CardProps>`
  background-color: ${({ $backgroundColor, ...props }) =>
    $backgroundColor || getThemeColors(props).surfaceHigh};
  color: ${({ $fontColor, ...props }) =>
    $fontColor || getThemeColors(props).primaryText};
  font-size: ${({ $fontSize }) => $fontSize || "1rem"};
  font-weight: ${({ $fontWeight }) => $fontWeight || "normal"};
  text-align: ${({ $textAlign }) => $textAlign || "left"};
  padding: ${({ $padding }) => $padding || "16px"};
  margin: ${({ $margin }) => $margin || "0"};
  border: ${({ $border }) => $border || "none"};
  border-radius: ${({ $borderRadius }) => $borderRadius || "16px"};
  display: ${({ $display }) => $display || "flex"};
  flex-direction: ${({ $flexDirection }) => $flexDirection || "column"};
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  }

  .card-body {
    display: flex;
    flex-direction: row;
    gap: 16px;
    width: 100%;
    
    @media (max-width: 768px) {
      flex-direction: column;
    }

    .image-section {
      flex: 1;
      display: flex;
      
      .preview-image {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-radius: 12px;
        border: 1px solid rgba(0, 0, 0, 0.05);
      }
    }

    .project-preview {
      flex: 1.2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 12px;

      .card-content {
        display: flex;
        flex-direction: column;
        gap: 6px;

        .card-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0;
          color: ${(props) => getThemeColors(props).primaryText};
        }

        .description {
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
          color: ${(props) => getThemeColors(props).secondaryTextHigh};
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .card-actions {
        display: flex;
        margin-top: auto;
      }
    }
  }

  .modal-project-details {
    display: flex;
    flex-direction: column;
  }
`;
