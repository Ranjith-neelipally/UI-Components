import React, { useState } from "react";
import { CardProps } from "./helpers";
import { CardStyles } from "./styles";
import Button from "../Button";
import Modal from "../Modal";

const Card: React.FC<CardProps> = ({
  children,
  title,
  description,
  previewImage,
  hideButton = false,
  buttonText = "View Project",
  onClickButton,
  ...props
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (onClickButton) {
      onClickButton();
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 1. Generic Container Mode
  if (children) {
    return <CardStyles {...props}>{children}</CardStyles>;
  }

  // 2. Structured Project Card Mode
  return (
    <CardStyles {...props}>
      <div className="card-body">
        {previewImage && (
          <div className="image-section">
            <img src={previewImage} alt={title || "preview"} className="preview-image" />
          </div>
        )}
        <div className="project-preview">
          <div className="card-content">
            {title && <h2 className="card-title">{title}</h2>}
            {description && <p className="description">{description}</p>}
          </div>
          {!hideButton && (
            <div className="card-actions">
              <Button onClick={handleOpenModal}>{buttonText}</Button>
            </div>
          )}
        </div>
      </div>
      {!hideButton && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={title || "Project Details"}
        >
          <div className="modal-project-details">
            {previewImage && (
              <img
                src={previewImage}
                alt={title || "project image"}
                style={{ width: "100%", maxHeight: "300px", objectFit: "cover", borderRadius: "12px", marginBottom: "20px" }}
              />
            )}
            <p style={{ whiteSpace: "pre-line" }}>{description}</p>
          </div>
        </Modal>
      )}
    </CardStyles>
  );
};

export default Card;
