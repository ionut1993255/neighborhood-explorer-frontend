import styled, { css } from "styled-components";

const Input = styled.input`
  padding: 10px;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 15px;
  width: 100%;
  box-sizing: border-box;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #f5f5f5;
      color: #999;
      cursor: not-allowed;
    `}
`;

export default Input;
