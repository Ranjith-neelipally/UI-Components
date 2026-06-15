import React, { createContext, useContext, useState, useCallback } from "react";
import {
  ToastContainer,
  ToastItem,
  ToastIcon,
  ToastContent,
  ToastTitle,
  ToastMessage,
  ToastCloseButton,
} from "./styles";
import { CheckIcon, InfoIcon, AlertTriangleIcon, AlertCircleIcon, CloseIcon } from "../Icons";

export type ToastType = "success" | "warning" | "error" | "info";

export interface Toast {
  id: string;
  title?: string;
  message: string;
  type: ToastType;
  duration?: number;
}

export interface ToastContextType {
  toast: {
    success: (message: string, title?: string, duration?: number) => void;
    error: (message: string, title?: string, duration?: number) => void;
    warning: (message: string, title?: string, duration?: number) => void;
    info: (message: string, title?: string, duration?: number) => void;
  };
  show: (params: { message: string; title?: string; type?: ToastType; duration?: number }) => void;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const show = useCallback(
    ({
      message,
      title,
      type = "info",
      duration = 4000,
    }: {
      message: string;
      title?: string;
      type?: ToastType;
      duration?: number;
    }) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, title, message, type, duration }]);

      if (duration > 0) {
        setTimeout(() => {
          dismiss(id);
        }, duration);
      }
    },
    [dismiss]
  );

  const toast = {
    success: (message: string, title?: string, duration?: number) =>
      show({ message, title, type: "success", duration }),
    error: (message: string, title?: string, duration?: number) =>
      show({ message, title, type: "error", duration }),
    warning: (message: string, title?: string, duration?: number) =>
      show({ message, title, type: "warning", duration }),
    info: (message: string, title?: string, duration?: number) =>
      show({ message, title, type: "info", duration }),
  };

  const getIcon = (type: ToastType) => {
    switch (type) {
      case "success":
        return <CheckIcon size={20} />;
      case "warning":
        return <AlertTriangleIcon size={20} />;
      case "error":
        return <AlertCircleIcon size={20} />;
      case "info":
      default:
        return <InfoIcon size={20} />;
    }
  };

  return (
    <ToastContext.Provider value={{ toast, show, dismiss }}>
      {children}
      <ToastContainer>
        {toasts.map((t) => (
          <ToastItem key={t.id} $type={t.type}>
            <ToastIcon $type={t.type}>{getIcon(t.type)}</ToastIcon>
            <ToastContent>
              {t.title && <ToastTitle>{t.title}</ToastTitle>}
              <ToastMessage>{t.message}</ToastMessage>
            </ToastContent>
            <ToastCloseButton onClick={() => dismiss(t.id)}>
              <CloseIcon size={16} />
            </ToastCloseButton>
          </ToastItem>
        ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
