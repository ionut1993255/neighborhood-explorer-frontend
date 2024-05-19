import { useNavigate } from "react-router-dom";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

import TooltipIcon from "../../ui/TooltipIcon";

import useAuth from "../../hooks/useAuth";

function Logout() {
  const navigate = useNavigate();
  const { handleLogout } = useAuth();

  async function logout() {
    const success = await handleLogout();

    if (success) {
      navigate("/login");
    }
  }

  return (
    <TooltipIcon text="Log out" onClick={logout}>
      <HiArrowRightOnRectangle />
    </TooltipIcon>
  );
}

export default Logout;
