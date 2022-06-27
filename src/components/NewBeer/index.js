import ImgNewBeer from "../../assets/new-beer.png";
import { Link } from "react-router-dom";
import { NavBar } from "../NavBar";

export function NewBeer() {
  return (
    <>
      <NavBar />
      <Link to={"/new-beer"}>
        <img src={ImgNewBeer} alt="Img New Beers" />
      </Link>
      <div>
        <h1>All Beers</h1>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </h5>
      </div>
    </>
  );
}
