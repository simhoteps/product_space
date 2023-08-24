import { FC } from "react";
import { Link } from "react-router-dom";
import { toImageUrl } from "utils/helpers/AssetHelpers";
import "../styles/ErrorStyles.scss";

const Error500: FC = () => {
  return (
    <div className="errorContent">
      <img
        className="imgStyles"
        src={toImageUrl("/media/illustrations/error/500-error.png")}
        alt=""
        style={{}}
      />
      <h1 className="descText">
        {" "}
        Internal Server Error! Please try again later.
      </h1>
      <Link to="/" className="linkStyles" style={{ textDecoration: "none" }}>
        Return Home
      </Link>
    </div>
  );
};

export { Error500 };
