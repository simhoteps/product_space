import { action, makeAutoObservable, runInAction } from "mobx";
import { RootStore } from "./_RootStore";
import { IMapData } from "types/CityTypes";
import { turkeySGKData } from "page/dashboard/data/NewData";

export default class MainStore {
  private rootStore: RootStore;
  topbarTitle: string = "";
  selectCitiesValue: IMapData | null = turkeySGKData[40];
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this);
  }

  setSelectCitiesValue(data: IMapData | null) {
    runInAction(() => {
      this.selectCitiesValue = data;
    });
  }

  extractPathFromURL(url: string): string {
    const baseUrl = "http://localhost:3000/";
    const path = url.replace(baseUrl, "");
    return path;
  }
}
