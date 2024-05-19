import styled from "styled-components";

const StyledErrorContainer = styled.div`
  font-family: system-ui;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  color: #3d0000;
  padding: 0 3rem 3rem 0;
`;

function Error({ message }) {
  return (
    <StyledErrorContainer>
      <p>{message}</p>
    </StyledErrorContainer>
  );
}

export default Error;
