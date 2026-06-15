import React from "react";
import { BreadcrumbsNav, BreadcrumbsList, BreadcrumbItem, BreadcrumbSeparator } from "./styles";

export interface Breadcrumb {
  label: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export interface BreadcrumbsProps {
  items: Breadcrumb[];
  separator?: React.ReactNode;
}

export const Breadcrumbs = ({ items, separator = "/" }: BreadcrumbsProps) => {
  return (
    <BreadcrumbsNav aria-label="breadcrumb">
      <BreadcrumbsList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <BreadcrumbItem $isLast={isLast}>
                {!isLast && item.href ? (
                  <a href={item.href} onClick={item.onClick}>
                    {item.label}
                  </a>
                ) : !isLast && item.onClick ? (
                  <span style={{ cursor: "pointer" }} onClick={item.onClick}>
                    {item.label}
                  </span>
                ) : (
                  <span>{item.label}</span>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
            </React.Fragment>
          );
        })}
      </BreadcrumbsList>
    </BreadcrumbsNav>
  );
};

export default Breadcrumbs;
