import styled from "styled-components";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";

const StyledCountryItem = styled.article`
  background-color: ${({ $isNeighbour }) =>
    $isNeighbour ? "#f0f0f0" : "#fff"};
  box-shadow: 0 2rem 5rem 1rem rgba(0, 0, 0, 0.1);
  font-size: 1.8rem;
  width: 30rem;
  border-radius: 0.7rem;
  margin: 0 1rem;
  transform: ${({ $isNeighbour }) =>
    $isNeighbour && "scale(0.8) translateY(1rem)"};

  &:first-child {
    margin-right: 4rem;
  }
`;

const StyledNeighbourTitle = styled.div`
  content: "Neighbour country";
  width: 100%;
  position: absolute;
  top: -4rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #424242;
`;

const StyledCountryImage = styled.img`
  width: 30rem;
  height: 17rem;
  object-fit: cover;
  background-color: #eee;
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
`;

const StyledCountryData = styled.div`
  padding: 2.5rem 3.75rem 3rem 3.75rem;
`;

function CountryItem({ country, isNeighbour }) {
  const { flag, name, region, population, languages, currencies } = country;

  return (
    <StyledCountryItem $isNeighbour={isNeighbour}>
      <StyledNeighbourTitle>Neighbour country</StyledNeighbourTitle>
      <StyledCountryImage src={flag} alt={`${name}'s flag`} />
      <StyledCountryData>
        <Heading as="h3" $isNeighbour={isNeighbour}>
          {name}
        </Heading>
        <Heading as="h4">{region}</Heading>
        <Row
          icon="👫"
          text={
            population < 100000
              ? (+population / 1000).toFixed(1) + " k people"
              : population < 1000000000
              ? (+population / 1000000).toFixed(1) + " mil. people"
              : (+population / 1000000000).toFixed(1) + " bil. people"
          }
        />
        <Row icon="🗣️" text={languages[0].name} />
        <Row icon="💰" text={currencies[0].name} />
      </StyledCountryData>
    </StyledCountryItem>
  );
}

export default CountryItem;
