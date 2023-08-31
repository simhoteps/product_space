import Racat, { createContext, ReactNode, useState } from "react";
import { ICityContext } from "./TypeContext";
import { IMapData } from "types/CityTypes";
import { turkeySGKData } from "page/home/data/NewData";

interface CityProviderProps {
  children: ReactNode;
}

export const cityContext = createContext({} as ICityContext);

export function CityProvider({ children }: CityProviderProps) {
  const [citiesValue, setCitiesValue] = useState<IMapData | null>(
    turkeySGKData[40]
  );
  const [inputValue, setInputValue] = useState("");
  const [openFilter, setFilter] = useState<string>("economicStructure");
  const [openSubFilter, setSubFilter] = useState<string>("exportBasket");

  return (
    <cityContext.Provider
      value={{
        citiesValue,
        setCitiesValue,
        inputValue,
        setInputValue,
        openFilter,
        setFilter,
        openSubFilter,
        setSubFilter,
      }}
    >
      {children}
    </cityContext.Provider>
  );
}
