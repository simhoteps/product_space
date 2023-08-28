import { action, makeAutoObservable, runInAction } from "mobx";
import { RootStore } from "./_RootStore";

export default class MainStore {
  private rootStore: RootStore;
  topbarTitle: string = "";

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this);
  }

  extractPathFromURL(url: string): string {
    const baseUrl = "http://localhost:3000/";
    const path = url.replace(baseUrl, "");
    return path;
  }
}
