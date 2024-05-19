import styled from "styled-components";

import Label from "./Label";

const StyledFormGroup = styled.div`
  margin-bottom: 15px;
`;

function FormGroup({ children, label }) {
  return (
    <StyledFormGroup>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
    </StyledFormGroup>
  );
}

export default FormGroup;
