import { useState } from "react";

import {
  fetchCountries,
  fetchCountryNeighbours,
  fetchRandomCountry,
} from "../services/apiCountries";

export const useCountryData = () => {
  const [countries, setCountries] = useState([]);
  const [isLoadingCountryData, setIsLoadingCountryData] = useState(false);
  const [isLoadingRandomCountryData, setIsLoadingRandomCountryData] =
    useState(false);
  const [errorCountryData, setErrorCountryData] = useState(null);
  const [errorRandomCountryData, setErrorRandomCountryData] = useState(null);

  async function fetchCountryData(countryName) {
    setIsLoadingCountryData(true);

    try {
      setErrorCountryData(null);

      if (countryName === "" || countryName === null) {
        setErrorCountryData("Input value is null or empty. 💥💥💥 Try again!");
        return;
      }

      const data = await fetchCountries(countryName);
      setCountries(data);

      await handleNeighbours(data);
    } catch (error) {
      setErrorCountryData(
        `Something went wrong. 💥💥💥 ${error.message}. Try again!`
      );
    } finally {
      setIsLoadingCountryData(false);
    }
  }

  async function fetchRandomCountryData() {
    setIsLoadingRandomCountryData(true);

    try {
      setErrorRandomCountryData(null);
      setErrorCountryData(null);

      const randomCountryData = await fetchRandomCountry();
      setCountries([randomCountryData]);

      await handleNeighbours([randomCountryData]);
    } catch (error) {
      setErrorRandomCountryData(
        `Something went wrong fetching random country. 💥💥💥 ${error.message}. Try again!`
      );
    } finally {
      setIsLoadingRandomCountryData(false);
    }
  }

  async function handleNeighbours(countryData) {
    if (countryData?.length > 0) {
      const neighbours = countryData.map(async (country) => {
        if (country.borders?.length > 0) {
          return Promise.all(
            country.borders.map(async (neighbour) => {
              try {
                return await fetchCountryNeighbours(neighbour);
              } catch (error) {
                throw new Error(
                  `Something went wrong fetching neighbouring country: ${error.message}`
                );
              }
            })
          );
        }
        return [];
      });

      const neighbourData = await Promise.all(neighbours);
      setCountries((prevCountries) => [
        ...prevCountries,
        ...neighbourData.flat(),
      ]);
    }
  }

  return {
    countries,
    isLoadingCountryData,
    isLoadingRandomCountryData,
    errorCountryData,
    setErrorCountryData,
    errorRandomCountryData,
    fetchCountryData,
    fetchRandomCountryData,
  };
};
