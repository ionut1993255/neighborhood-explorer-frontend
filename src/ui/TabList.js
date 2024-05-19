import styled from "styled-components";

const StyledTabList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

function TabList({ children }) {
  return <StyledTabList>{children}</StyledTabList>;
}

export default TabList;
