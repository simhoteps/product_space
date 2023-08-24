import { makeAutoObservable } from "mobx";
import MainStore from "./MainStore";
import TableStore from "components/table/store/TableStore";
import FlowStore from "page/workflow/store/FlowStore";
import LoginStore from "./LoginStore";
import AlertStore from "./AlertStore";

export class RootStore {
  mainStore: MainStore;
  tableStore: TableStore;
  flowStore: FlowStore;
  loginStore: LoginStore;
  alertStore: AlertStore;

  constructor() {
    makeAutoObservable(this);
    this.mainStore = new MainStore(this);
    this.tableStore = new TableStore(this);
    this.flowStore = new FlowStore(this);
    this.loginStore = new LoginStore(this);
    this.alertStore = new AlertStore(this);
  }
}
