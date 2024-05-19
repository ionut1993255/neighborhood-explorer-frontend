import styled from "styled-components";

const StyledButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  transition: all 0.2s;
  cursor: pointer;

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: #424242;
  }
`;

function ButtonIcon({ children, onClick }) {
  return <StyledButtonIcon onClick={onClick}>{children}</StyledButtonIcon>;
}

export default ButtonIcon;
