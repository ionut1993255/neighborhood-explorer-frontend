import styled from "styled-components";

const StyledRow = styled.p`
  margin-bottom: 1rem;
`;

const StyledRowSpan = styled.span`
  display: inline-block;
  margin-right: 2rem;
  font-size: 2.4rem;
`;

function Row({ icon, text }) {
  return (
    <StyledRow>
      <StyledRowSpan>{icon}</StyledRowSpan>
      {text}
    </StyledRow>
  );
}

export default Row;
