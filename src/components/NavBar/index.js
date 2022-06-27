import { Link } from "react-router-dom";
import HomeBeer from "../../assets/homeBeer.png";

export function NavBar() {
  return (
    <>
      <Link to={"/"}>
        <img src={HomeBeer} style={{ cursor: "pointer" }} />
      </Link>
    </>
  );
}
