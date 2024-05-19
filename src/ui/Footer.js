import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 20px;
  background-color: #1a508b;
  color: white;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>&copy; 2024 Neighborhood Explorer. All rights reserved.</p>
    </StyledFooter>
  );
}

export default Footer;
