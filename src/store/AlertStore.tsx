import { makeAutoObservable } from "mobx";
import { RootStore } from "./_RootStore";

interface IAlertsModel {
  alert_content: string;
  alert_id: number;
  created: string;
  customer_id: number;
  customer_name: string;
}

export default class AlertStore {
  private rootStore: RootStore;
  alerts: IAlertsModel[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  //first action for login
  getAlertsData = async () => {
    const user: string | null = sessionStorage.getItem("user");
    try {
      if (user !== null) {
        const userData = JSON.parse(user);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Token ${userData.key}`);
        await fetch(`http://185.185.82.233/customer/alert/ `, {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        })
          .then((response) => response.json())
          .then((result) => {
            this.alerts = result;
          })
          .catch((_error) => {});
      }
    } catch (error) {}
  };
}
