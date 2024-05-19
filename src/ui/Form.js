import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  margin: ${(props) => (props.type === "homeForm" ? "3rem 0 0 3rem" : "")};
`;

function Form({ children, type, onSubmit }) {
  return (
    <StyledForm type={type} onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
}

export default Form;
