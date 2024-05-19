import { normalizeInput } from "../utils/helpers";
import { ALL_API_URL, NAME_API_URL, ALPHA_API_URL } from "../utils/constants";

export async function fetchCountries(countryName) {
  try {
    const response = await fetch(
      `${NAME_API_URL}${normalizeInput(countryName)}`
    );

    if (!response.ok) {
      throw new Error(`Country not found (${response.status})`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

export async function fetchCountryNeighbours(neighboursName) {
  try {
    const response = await fetch(`${ALPHA_API_URL}${neighboursName}`);

    if (!response.ok) {
      throw new Error(`Country neighbours not found (${response.status})`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

export async function fetchRandomCountry() {
  try {
    const response = await fetch(ALL_API_URL);

    if (!response.ok) {
      throw new Error(`Country not found (${response.status}).`);
    }

    const data = await response.json();

    const countriesLength = data.length;
    const randomCountry = Math.floor(Math.random() * countriesLength - 1);

    return data[randomCountry];
  } catch (err) {
    throw new Error(`${err.message}`);
  }
}
