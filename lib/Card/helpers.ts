import { StyleProps } from "../types/StyleTypes";

export interface CardProps extends StyleProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  previewImage?: string;
  hideButton?: boolean;
  buttonText?: string;
  onClickButton?: () => void;
  id?: string;
  className?: string;
}
