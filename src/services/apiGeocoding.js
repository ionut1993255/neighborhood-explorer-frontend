import { GEO_CODE_API_ROOT, GEO_CODE_API_SUFFIX } from "../utils/constants";

export function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export async function fetchAddress(lat, lng) {
  if (lat === "" || lat === null || lng === "" || lng === null) {
    throw new Error("We cannot get your location. 💥💥💥 Try again!");
  }

  try {
    const response = await fetch(
      `${GEO_CODE_API_ROOT}${lat},${lng}${GEO_CODE_API_SUFFIX}`
    );
    if (!response.ok) {
      throw new Error(`Problem with geocoding ${response.status}.`);
    }
    const data = await response.json();
    return data.country;
  } catch (err) {
    throw new Error(`Something went wrong. 💥💥💥 ${err.message}. Try again!`);
  }
}
