import styled from "styled-components";

import Heading from "./Heading";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #1a508b;
`;

const Img = styled.img`
  height: 6rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/images/earth.png" alt="logo" />
      <Heading as="h3">Explorer</Heading>
    </StyledLogo>
  );
}

export default Logo;
