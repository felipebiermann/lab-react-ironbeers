import { Link } from "react-router-dom";
import imgRandomBeer from "../../assets/random-beer.png";
import imgBeers from "../../assets/beers.png";
import ImgNewBeer from "../../assets/new-beer.png";

export function Home() {
  return (
    <div>
      <Link to={"/beers"}>
        <img src={imgBeers} alt="Img Beers" />
      </Link>
      <div>
        <h1>Beers</h1>
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
      <Link to={"/new-beer"}>
        <img src={ImgNewBeer} alt="Img New Beers" />
      </Link>
      <div>
        <h1>New Beers</h1>
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
      <Link to={"/random-beer"}>
        <img src={imgRandomBeer} alt="Random Beer" />
      </Link>
      <div>
        <h1>Random Beers</h1>
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
    </div>
  );
}
