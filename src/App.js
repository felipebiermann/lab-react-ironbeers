import "./App.css";
// import axios from "axios";
import { Beers } from "./components/Beers";
import { NewBeer } from "./components/NewBeer";
import { RandomBeer } from "./components/RandomBeer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { BeersDetails } from "./components/BeersDetails";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/beers/:beerId" element={<BeersDetails />} />
          <Route path="/new-beer" element={<NewBeer />} />
          <Route path="/random-beer" element={<RandomBeer />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
