import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  width: 100vw;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
