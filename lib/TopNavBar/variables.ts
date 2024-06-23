import { TopNavBarProps } from "./helpers";

export const TopNavclassname = ({ topNavIconClassName }: TopNavBarProps) => {
  if (topNavIconClassName && topNavIconClassName.trim() !== "") {
    return `topNavIcon ${topNavIconClassName}`;
  }

  return `topNavIcon`;
};
