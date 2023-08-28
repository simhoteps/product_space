import React from "react";
import { IMapData } from "types/CityTypes";

export interface ICityContext {
  citiesValue: IMapData | null;
  setCitiesValue: React.Dispatch<React.SetStateAction<IMapData | null>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}
