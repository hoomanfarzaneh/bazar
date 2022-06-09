import { Link } from "react-router-dom";
import "./listItem.scss";

export default function ListItem() {
  return (
    <div
      className="listItem">
        <Link to="/single">
      <img
          src='https://upload.wikimedia.org/wikipedia/commons/1/1d/Cafe_Bazaar_logo_2020.jpg?20210922185957'
          alt=""
      />
      </Link>
    </div>
  );
}