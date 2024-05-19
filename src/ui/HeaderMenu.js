import styled from "styled-components";
import { useEffect } from "react";
import { HiOutlineUser } from "react-icons/hi";

import Logo from "./Logo";
import TooltipIcon from "./TooltipIcon";
import Logout from "../features/authentication/Logout";

import useAuth from "../hooks/useAuth";

const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  position: absolute;
  top: 0;
  left: 3.4rem;
  right: 3.4rem;
`;

const StyledIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const { fetchUser, userName } = useAuth();

  useEffect(
    function () {
      fetchUser();
    },
    [fetchUser]
  );

  return (
    <StyledHeaderMenu>
      <li>
        <Logo />
      </li>

      <StyledIconsContainer>
        <li>
          <TooltipIcon text={userName}>
            <HiOutlineUser />
          </TooltipIcon>
        </li>

        <li>
          <Logout />
        </li>
      </StyledIconsContainer>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
