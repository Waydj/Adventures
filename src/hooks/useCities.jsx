import { useContext } from "react";
import { CitiesContext } from "../contexts/CitiesContext";

export const useCities = () => {
  const ctx = useContext(CitiesContext);
  return ctx;
};
