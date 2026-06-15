import React, { useState, useRef } from "react";
import {
  UploadContainer,
  Label,
  Dropzone,
  DropzoneText,
  Subtext,
  FileList,
  FileItem,
  FileName,
  FileSize,
  RemoveButton,
  HiddenInput,
} from "./styles";

export interface FileUploadProps {
  label?: string;
  accept?: string;
  multiple?: boolean;
  maxSizeMB?: number;
  onChange?: (files: File[]) => void;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const FileUpload = ({
  label,
  accept,
  multiple = false,
  maxSizeMB = 10,
  onChange,
  fullWidth = true,
  disabled = false,
}: FileUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const processFiles = (files: FileList) => {
    const validFiles: File[] = [];
    const maxSizeBytes = maxSizeMB * 1024 * 1024;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.size <= maxSizeBytes) {
        validFiles.push(file);
      } else {
        alert(`File "${file.name}" exceeds the maximum size of ${maxSizeMB}MB.`);
      }
    }

    if (validFiles.length > 0) {
      let updatedFiles = [];
      if (multiple) {
        updatedFiles = [...selectedFiles, ...validFiles];
      } else {
        updatedFiles = [validFiles[0]];
      }
      setSelectedFiles(updatedFiles);
      if (onChange) {
        onChange(updatedFiles);
      }
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (disabled) return;

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (disabled) return;

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      processFiles(e.target.files);
    }
  };

  const onButtonClick = () => {
    if (!disabled && inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleRemoveFile = (index: number) => {
    const updated = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updated);
    if (onChange) {
      onChange(updated);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <UploadContainer $fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <Dropzone
        $isDragActive={dragActive}
        $disabled={disabled}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
      >
        <HiddenInput
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleChange}
        />
        <svg
          style={{ width: "36px", height: "36px", color: "currentColor" }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
        <DropzoneText>
          Drag & drop files here, or <span>browse</span>
        </DropzoneText>
        <Subtext>Max size: {maxSizeMB}MB</Subtext>
      </Dropzone>

      {selectedFiles.length > 0 && (
        <FileList>
          {selectedFiles.map((file, idx) => (
            <FileItem key={`${file.name}-${idx}`}>
              <FileName>
                {file.name}
                <FileSize>({formatFileSize(file.size)})</FileSize>
              </FileName>
              <RemoveButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveFile(idx);
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </RemoveButton>
            </FileItem>
          ))}
        </FileList>
      )}
    </UploadContainer>
  );
};

export default FileUpload;
