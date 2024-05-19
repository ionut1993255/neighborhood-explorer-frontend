import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      margin-bottom: 3.2rem;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: ${(props) => (props.isNeighbour ? "2.7rem" : "2.7rem")};
      margin-bottom: 0.7rem;
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.4rem;
      margin-bottom: 2.5rem;
      text-transform: uppercase;
      color: #424242;
    `}
`;

export default Heading;
