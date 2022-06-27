import { Link } from "react-router-dom";
import imgRandomBeer from "../../assets/random-beer.png";
import imgBeers from "../../assets/beers.png";
import ImgNewBeer from "../../assets/new-beer.png";

export function Home() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <Link to={"/beers"}>
        <img src={imgBeers} className="card-img-top" alt="Img Beers" />
      </Link>
      <div className="class-body">
        <h1 className="card-title">All Beers</h1>
        <h3 className="card-text">
          Aqui você encontra todas as cervejas JUNTAS!
        </h3>

        <a href="beers" className="btn btn-primary">
          <button style={{ cursor: "pointer" }}>Saiba Mais!</button>
        </a>

        <hr />
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <Link to={"/new-beer"}>
          <img src={ImgNewBeer} className="card-img-top" alt="Img New Beers" />
        </Link>
        <div>
          <h1>New Beers</h1>
          <h3>Adicione novas Cervejas!</h3>
          <a href="new-beer" className="btn btn-primary">
            <button style={{ cursor: "pointer" }}>Saiba Mais!</button>
          </a>
        </div>
      </div>
      <hr />
      <div className="card" style={{ width: "18rem" }}>
        <Link to={"/random-beer"}>
          <img src={imgRandomBeer} className="card-img-top" alt="Random Beer" />
        </Link>
        <div>
          <h1>Random Beers</h1>
          <h3>Aqui é o lugar para ter cervejas aleatórias!</h3>
          <a href="random-beer" className="btn btn-primary">
            <button style={{ cursor: "pointer" }}>Saiba Mais!</button>
          </a>
        </div>
      </div>
    </div>
  );
}
