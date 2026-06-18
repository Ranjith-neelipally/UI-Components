import React from "react";

export interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  route?: string;
  disabled?: boolean;
  badge?: string;
  isNew?: boolean;
  children?: NavItem[];
  $isActive?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}
