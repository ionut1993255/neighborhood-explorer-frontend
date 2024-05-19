import Tooltip from "./Tooltip";
import ButtonIcon from "./ButtonIcon";

function TooltipIcon({ children, text, onClick }) {
  return (
    <Tooltip content={text}>
      <ButtonIcon onClick={onClick}>{children}</ButtonIcon>
    </Tooltip>
  );
}

export default TooltipIcon;
