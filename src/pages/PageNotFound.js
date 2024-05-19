import styled from "styled-components";

import Heading from "../ui/Heading";
import Button from "../ui/Button";

import { useMoveBack } from "../hooks/useMoveBack";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  background-color: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 0.5rem;
  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <Button onClick={moveBack}>&larr; Go back</Button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
