import { makeAutoObservable, runInAction } from "mobx";
import { RootStore } from "./_RootStore";

interface VerifcationModel {
  Username: string;
  Password: string;
}

interface ICurrentUser {
  key: string;
  refresh?: string;
  user?: {
    pk?: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
  };
}

export default class LoginStore {
  private rootStore: RootStore;
  currentUser: ICurrentUser = {
    key: "",
  };
  loginMessage: string = "";

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setLoginMessage(data: string) {
    runInAction(() => {
      this.loginMessage = data;
    });
  }

  //first action for login
  /*   handleLogin = async (value: VerifcationModel) => {
    try {
      if (value.Username) {
        var formdata = new FormData();
        formdata.append("username", `${value.Username}`);
        formdata.append("password", `${value.Password}`);

        await fetch(`http://185.185.82.233/auth/login/`, {
          method: "POST",
          body: formdata,
          redirect: "follow",
        })
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            } else if (response.status === 400) {
              this.setLoginMessage("The login details is incorrect.");
            } else {
              console.log("first 2");
              this.setLoginMessage("Network error");
            }
          })
          .then((result) => {
            if (result.key !== undefined) {
              this.currentUser = result;
              sessionStorage.setItem("user", JSON.stringify(result));
              this.loginMessage = "";
              document.location.reload();
            } else {
              this.loginMessage = "Network Error";
            }
          })
          .catch((_error) => {
            this.loginMessage = "The login details is incorrect.";
          });
      }
    } catch (error) {}
  }; */

  handleLogin = async (value: VerifcationModel) => {
    try {
      if (value.Username) {
        var formdata = new FormData();
        formdata.append("username", `${value.Username}`);
        formdata.append("password", `${value.Password}`);

        if (value.Username === "admin" && value.Password === "123456") {
          this.currentUser = { key: "1234567899" };
          sessionStorage.setItem("user", JSON.stringify({ key: "1234567899" }));
          this.loginMessage = "";
          document.location.reload();
        } else {
          this.loginMessage = "Network Error";
        }
      }
    } catch (error) {}
  };

  //logout
  handleLogOut = async () => {
    try {
      sessionStorage.removeItem("user");
      this.currentUser = { key: "" };
      document.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  //Second action for login
  /*     handleLogin = async () => {
        try {
          if (this.currentUser !== null) {
      

            await fetch(`185.185.82.233/auth/login/`, {
                method: 'POST',
                body: raw,
                headers: this.getHeaders(),
                redirect: 'follow',
              }).then((response) => {
              if (response) {
                sessionStorage.setItem('emailToken', JSON.stringify(response))
                this.setEmailToken(JSON.stringify(response))
                document.location.reload()
              } else {
                failEmailToken()
              }
            })
          }
        } catch (error) {
          console.log(error)
          failEmailToken()
        }
      } */
}
