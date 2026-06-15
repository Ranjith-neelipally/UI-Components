import React, { useState } from "react";
import { TooltipWrapper, TooltipTip, TriggerContainer } from "./styles";

export interface TooltipProps {
  content: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
  children: React.ReactNode;
}

export const Tooltip = ({ content, position = "top", delay = 200, children }: TooltipProps) => {
  let timeout: ReturnType<typeof setTimeout>;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay);
  };

  const hideTip = () => {
    clearTimeout(timeout);
    setActive(false);
  };

  return (
    <TooltipWrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
      <TriggerContainer>{children}</TriggerContainer>
      {active && (
        <TooltipTip $position={position}>
          {content}
        </TooltipTip>
      )}
    </TooltipWrapper>
  );
};

export default Tooltip;
