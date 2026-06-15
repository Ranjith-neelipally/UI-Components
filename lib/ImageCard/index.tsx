import React from "react";
import {
  CardWrapper,
  ImageContainer,
  Overlay,
  Content,
  Title,
  Subtitle,
  Description,
  CardFooter,
} from "./styles";

export interface ImageCardProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  description?: string;
  footer?: React.ReactNode;
  aspectRatio?: string;
  onClick?: () => void;
  hoverEffect?: "zoom" | "lift" | "fade" | "none";
}

export const ImageCard = ({
  imageUrl,
  title,
  subtitle,
  description,
  footer,
  aspectRatio = "16/9",
  onClick,
  hoverEffect = "zoom",
}: ImageCardProps) => {
  return (
    <CardWrapper onClick={onClick} $hasClick={!!onClick} $hoverEffect={hoverEffect}>
      <ImageContainer className="image-bg" $imageUrl={imageUrl} $aspectRatio={aspectRatio}>
        <Overlay />
      </ImageContainer>
      <Content>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
        {footer && <CardFooter>{footer}</CardFooter>}
      </Content>
    </CardWrapper>
  );
};

export default ImageCard;
