import styled from "styled-components";

import CountryItem from "./CountryItem";

const StyledCountryList = styled.div`
  width: 100vw;
  display: flex;
  font-size: 2rem;
  overflow-x: auto;
  padding: 3rem 0 3.5rem 3.3rem;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff6a00;
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
  }
`;

function CountryList({ countries }) {
  if (!countries.length) {
    return null;
  }

  return (
    <StyledCountryList>
      {countries.map((country, index) => (
        <CountryItem
          country={country}
          key={country.name}
          isNeighbour={index > 0}
        />
      ))}
    </StyledCountryList>
  );
}

export default CountryList;
