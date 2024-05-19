import styled from "styled-components";

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 3rem;
`;

function ButtonGroup({ children }) {
  return <StyledButtonGroup>{children}</StyledButtonGroup>;
}

export default ButtonGroup;
