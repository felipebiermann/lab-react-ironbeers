import { NavBar } from "../NavBar";
import axios from "axios";
import { useState, useEffect } from "react";

export function RandomBeer() {
  const [randomBeers, setRandomBeers] = useState([]);
  useEffect(() => {
    async function fetchRandomBeer() {
      try {
        const responseRandom = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers/random"
        );
        setRandomBeers(responseRandom.data);
        console.log(responseRandom);
      } catch (err) {
        console.log(err);
      }
    }
    fetchRandomBeer();
  }, []);

  return (
    <>
      <NavBar />
      <img class="imgBeer" src={randomBeers.image_url}></img>
      <h1>{randomBeers.name}</h1>
      <h2>{randomBeers.tagline}</h2>
      <h3>{randomBeers.tagline}</h3>
      <h4>{randomBeers.first_brewed}</h4>
      <h4>{randomBeers.attenuation_level}</h4>
      <h4>{randomBeers.description}</h4>
      <h4>{randomBeers.contributed_by}</h4>
    </>
  );
}
