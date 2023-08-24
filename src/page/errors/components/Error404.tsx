import { FC } from "react";
import { Link } from "react-router-dom";
import { toImageUrl } from "utils/helpers/AssetHelpers";
import "../styles/ErrorStyles.scss";
import { useStores } from "utils/hooks/use_store";
import { observer } from "mobx-react";

const Error404: FC = observer(() => {
  const { mainStore } = useStores();
  return (
    <div className="errorContent">
      <img
        className="imgStyles"
        src={toImageUrl("/media/illustrations/error/404-error.png")}
        alt=""
        style={{}}
      />
      <h1 className="descText">ERROR! PAGE NOT FOUNT</h1>
      <Link
        onClick={() => {
          mainStore.setTopbarTitle("Dashboard");
        }}
        to="/dashboard"
        className="linkStyles"
        style={{ textDecoration: "none" }}
      >
        Return Home
      </Link>
    </div>
  );
});

export { Error404 };
