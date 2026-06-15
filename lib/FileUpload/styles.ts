import styled from "styled-components";
import { getThemeColors } from "../colors";

export const UploadContainer = styled.div<{ $fullWidth: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  font-family: inherit;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => getThemeColors(props).primaryText};
`;

export const Dropzone = styled.div<{ $isDragActive: boolean; $disabled?: boolean }>`
  border: 2px dashed
    ${({ $isDragActive, ...props }) =>
      $isDragActive ? getThemeColors(props).primary : `${getThemeColors(props).primaryHigh}60`};
  background-color: ${({ $isDragActive, ...props }) =>
    $isDragActive ? `${getThemeColors(props).primary}08` : getThemeColors(props).surfaceHigh};
  border-radius: 12px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease-in-out;
  text-align: center;
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};

  &:hover:not([disabled]) {
    border-color: ${(props) => getThemeColors(props).primary};
    background-color: ${(props) => getThemeColors(props).surfaceDefault};
  }
`;

export const DropzoneText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => getThemeColors(props).primaryText};
  margin: 0;

  span {
    color: ${(props) => getThemeColors(props).primary};
    font-weight: 600;
    text-decoration: underline;
  }
`;

export const Subtext = styled.span`
  font-size: 11px;
  color: ${(props) => getThemeColors(props).secondaryTextHigh};
`;

export const FileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 6px;
`;

export const FileItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background-color: ${(props) => getThemeColors(props).surfaceDefault};
  border: 1px solid ${(props) => getThemeColors(props).primaryHigh}20;
  border-radius: 8px;
  font-size: 13px;
  color: ${(props) => getThemeColors(props).primaryText};
`;

export const FileName = styled.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 70%;
`;

export const FileSize = styled.span`
  font-size: 11px;
  color: ${(props) => getThemeColors(props).secondaryTextHigh};
  margin-left: 8px;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => getThemeColors(props).danger};
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${(props) => getThemeColors(props).danger}15;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;
