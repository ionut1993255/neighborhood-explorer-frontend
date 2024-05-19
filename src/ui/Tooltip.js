import styled from "styled-components";
import { useState } from "react";

const StyledTooltipWrapper = styled.div`
  position: relative;
`;

const StyledTooltipContent = styled.div`
  position: absolute;
  font-size: 1.5rem;
  white-space: nowrap;
  bottom: -3rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
  transition: opacity 0.3s;
  &:after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0.5rem;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }
`;

function Tooltip({ children, content }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledTooltipWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      <StyledTooltipContent $isHovered={isHovered}>
        {content}
      </StyledTooltipContent>
    </StyledTooltipWrapper>
  );
}

export default Tooltip;
