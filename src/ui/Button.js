import styled, { css } from "styled-components";

const buttonStyles = css`
  padding: ${(props) => (props.type === "primary" ? "2rem 5rem" : "10px")};
  border: none;
  border-radius: ${(props) => (props.type === "primary" ? "0.5rem" : "4px")};
  color: ${(props) => (props.disabled ? "#999" : "white")};
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : "orangered")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: color 0.3s, background-color 0.3s;

  &:hover {
    color: ${(props) => (props.disabled ? "#666" : "#5A2F11")};
    background-color: ${(props) => (props.disabled ? "#f5f5f5" : "#FFF0E5")};
  }
`;

const StyledButton = styled.button`
  font-size: ${(props) => (props.type === "primary" ? "2rem" : "16px")};
  margin-bottom: ${(props) => (props.type === "primary" ? "1rem" : "")};
  box-shadow: ${(props) =>
    props.type === "primary" ? "0 8px 15px rgba(0, 0, 0, 0.1)" : ""};
  width: ${(props) => (props.type === "submit" ? "100%" : "")};
  ${buttonStyles}
`;

function Button({ children, type, disabled, onClick }) {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
