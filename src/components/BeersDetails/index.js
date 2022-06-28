import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function BeersDetails() {
  //   const params = useParams();
  const { beerId } = useParams();
  const [beer, setBeer] = useState({});

  useEffect(() => {
    async function fetchBeer() {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setBeer(response.data);
    }

    fetchBeer();
  }, []);

  return (
    <div>
      <h1>{beer.name}</h1>
      <h2>{beer.tagline}</h2>
      <h3>{beer.tagline}</h3>
      <h4>{beer.first_brewed}</h4>
      <h4>{beer.attenuation_level}</h4>
      <h4>{beer.description}</h4>
      <h4>{beer.contributed_by}</h4>
    </div>
  );
}
