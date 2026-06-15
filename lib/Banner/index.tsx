import React, { useState } from "react";
import { BannerContainer, BannerContent, BannerIcon, BannerCloseButton, BannerVariant } from "./styles";
import { CheckIcon, InfoIcon, AlertTriangleIcon, AlertCircleIcon, CloseIcon } from "../Icons";

export interface BannerProps {
  variant?: BannerVariant;
  title?: string;
  children: React.ReactNode;
  sticky?: boolean;
  closable?: boolean;
  onClose?: () => void;
}

export const Banner = ({
  variant = "info",
  title,
  children,
  sticky = false,
  closable = false,
  onClose,
}: BannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const getIcon = (variant: BannerVariant) => {
    switch (variant) {
      case "success":
        return <CheckIcon size={20} />;
      case "warning":
        return <AlertTriangleIcon size={20} />;
      case "danger":
        return <AlertCircleIcon size={20} />;
      case "info":
      default:
        return <InfoIcon size={20} />;
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  return (
    <BannerContainer $variant={variant} $sticky={sticky}>
      <BannerContent>
        <BannerIcon $variant={variant}>{getIcon(variant)}</BannerIcon>
        <div>
          {title && <strong>{title}: </strong>}
          {children}
        </div>
      </BannerContent>
      {closable && (
        <BannerCloseButton onClick={handleClose} aria-label="Close banner">
          <CloseIcon size={16} />
        </BannerCloseButton>
      )}
    </BannerContainer>
  );
};

export default Banner;
