import { makeAutoObservable } from "mobx";
import MainStore from "./MainStore";
import LoginStore from "./LoginStore";

export class RootStore {
  mainStore: MainStore;
  loginStore: LoginStore;

  constructor() {
    makeAutoObservable(this);
    this.mainStore = new MainStore(this);
    this.loginStore = new LoginStore(this);
  }
}
