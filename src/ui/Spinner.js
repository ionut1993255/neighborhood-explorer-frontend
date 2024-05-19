import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-top: 3rem;
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  border-top: 3px solid #3498db;
  animation: ${spinAnimation} 1s linear infinite;
`;

function Spinner() {
  return <StyledSpinner />;
}

export default Spinner;
