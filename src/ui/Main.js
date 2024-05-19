import styled from "styled-components";
import { useState } from "react";

import CountryList from "../features/country/CountryList";
import SearchCountryForm from "../features/country/SearchCountryForm";
import Error from "./Error";
import Spinner from "./Spinner";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";

import { useCountryData } from "../hooks/useCountryData";
import { useGeolocation } from "../hooks/useGeolocation";

const StyledMain = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 10rem;
`;

function Main() {
  const [searchCountry, setSearchCountry] = useState("");
  const {
    countries,
    isLoadingCountryData,
    isLoadingRandomCountryData,
    errorCountryData,
    setErrorCountryData,
    errorRandomCountryData,
    fetchCountryData,
    fetchRandomCountryData,
  } = useCountryData();
  const {
    isLoadingGeolocation,
    errorGeolocation,
    setErrorGeolocation,
    guessLocation,
  } = useGeolocation();

  const allLoadingStates =
    isLoadingCountryData || isLoadingRandomCountryData || isLoadingGeolocation;

  const allErrorStates =
    errorCountryData || errorRandomCountryData || errorGeolocation;

  function getCountryData(searchCountryQuery) {
    fetchCountryData(searchCountryQuery);
  }

  function getRandomCountryData() {
    fetchRandomCountryData();

    setSearchCountry("");
    setErrorCountryData(null);
  }

  async function handleGuessLocation() {
    setSearchCountry("");
    setErrorCountryData(null);
    try {
      const country = await guessLocation();

      if (country) {
        getCountryData(country);
      } else {
        setErrorGeolocation(
          "Country not found based on geolocation. 💥💥💥 Try again!"
        );
      }
    } catch (err) {
      setErrorGeolocation("Error while guessing location: " + err.message);
    }
  }

  return (
    <StyledMain>
      {!allErrorStates && !allLoadingStates && (
        <CountryList countries={countries} />
      )}

      <SearchCountryForm
        getCountryData={getCountryData}
        isLoading={allLoadingStates}
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
      />

      {allLoadingStates && <Spinner />}

      <ButtonGroup>
        <Button
          type="primary"
          disabled={allLoadingStates}
          onClick={() => getCountryData(searchCountry)}
        >
          Search for your country's neighbours
        </Button>

        <Button
          type="primary"
          disabled={allLoadingStates}
          onClick={handleGuessLocation}
        >
          Guess where I am
        </Button>

        <Button
          type="primary"
          disabled={allLoadingStates}
          onClick={getRandomCountryData}
        >
          Get a random country
        </Button>
      </ButtonGroup>

      {allErrorStates && <Error message={allErrorStates} />}
    </StyledMain>
  );
}

export default Main;
