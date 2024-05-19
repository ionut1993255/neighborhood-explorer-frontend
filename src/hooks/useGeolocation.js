import { useEffect, useState } from "react";
import { getPosition, fetchAddress } from "../services/apiGeocoding";

export const useGeolocation = () => {
  const [position, setPosition] = useState(null);
  const [isLoadingGeolocation, setIsLoadingGeolocation] = useState(false);
  const [errorGeolocation, setErrorGeolocation] = useState(null);

  async function getGeolocation() {
    setIsLoadingGeolocation(true);
    try {
      const pos = await getPosition();

      setPosition(pos);
      setErrorGeolocation(null);
    } catch (err) {
      setErrorGeolocation(err);
    } finally {
      setIsLoadingGeolocation(false);
    }
  }

  useEffect(() => {
    getGeolocation();
  }, []);

  async function guessLocation() {
    setIsLoadingGeolocation(true);
    try {
      const lat = position?.coords.latitude;
      const lng = position?.coords.longitude;

      const country = await fetchAddress(lat, lng);

      setErrorGeolocation(null);

      return country;
    } catch (err) {
      setErrorGeolocation(err);
    } finally {
      setIsLoadingGeolocation(false);
    }
  }

  return {
    position,
    isLoadingGeolocation,
    errorGeolocation,
    setErrorGeolocation,
    guessLocation,
  };
};
