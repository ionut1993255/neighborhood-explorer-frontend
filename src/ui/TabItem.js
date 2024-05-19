import React from "react";
import styled from "styled-components";

const StyledTabItem = styled.button`
  padding: 10px 20px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  background-color: ${({ $disabled, $active }) =>
    $disabled ? "#f5f5f5" : $active ? "#FF4500" : "#f5f5f5"};
  border: none;
  border-bottom: ${({ $active, $disabled }) =>
    $active && !$disabled ? "2px solid #FFD700" : "none"};
  outline: none;
  font-size: 16px;
  margin: 0 5px;
  transition: background-color 0.3s, color 0.3s;
  color: ${({ $disabled, $active }) =>
    $disabled ? "#424242" : $active ? "white" : "#424242"};
  border-radius: 4px;

  &:hover {
    background-color: ${({ $disabled, $active }) =>
      $disabled ? "" : $active ? "" : "#FFF0E5"};
    color: ${({ $disabled, $active }) =>
      $disabled ? "" : $active ? "" : "#5A2F11"};
  }
`;

const TabItem = ({ children, active, disabled, onClick }) => {
  return (
    <StyledTabItem
      $active={active}
      $disabled={disabled}
      aria-disabled={disabled ? "true" : "false"}
      onClick={onClick}
    >
      {children}
    </StyledTabItem>
  );
};

export default TabItem;
