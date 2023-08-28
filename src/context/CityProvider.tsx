import Racat, { createContext, ReactNode, useState } from "react";
import { ICityContext } from "./TypeContext";
import { IMapData } from "types/CityTypes";
import { turkeyCity } from "page/home/data/MapData";

interface CityProviderProps {
  children: ReactNode;
}

export const cityContext = createContext({} as ICityContext);

export function CityProvider({ children }: CityProviderProps) {
  const [citiesValue, setCitiesValue] = useState<IMapData | null>(
    turkeyCity[40]
  );
  const [inputValue, setInputValue] = useState("");

  return (
    <cityContext.Provider
      value={{
        citiesValue,
        setCitiesValue,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </cityContext.Provider>
  );
}
