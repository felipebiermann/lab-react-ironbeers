import { NavBar } from "../NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function fetchBeers() {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );

        setBeers(response.data);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchBeers();
  });

  return (
    <>
      <NavBar />

      {beers.map((beer) => (
        <>
          <img class="imgBeer" src={beer.image_url}></img>

          {/* <h2>{beer.name}</h2> */}
          <Link to={`/beers/${beer._id}`}>
            <h2>{beer.name}</h2>
          </Link>

          <h3>{beer.tagline}</h3>

          <p>{beer.contributed_by}</p>
        </>
      ))}
    </>
  );
}
