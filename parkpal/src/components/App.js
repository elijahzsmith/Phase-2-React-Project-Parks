import React, { useState, useEffect, createContext } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./NavBar.js";
import Home from "../pages/Home.js";
import Favorites from "../pages/Favorites.js";
import Scavenger from "../pages/Scavenger.js";

function App() {
  const [parksList, setParksList] = useState([]);

  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/parks?&api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((parksData) => {
        setParksList(parksData.data);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home parksList={parksList} />
        </Route>
        <Route exact path="/favorites">
          <Favorites parksList={parksList} />
        </Route>
        <Route exact path="/scavenger">
          <Scavenger parksList={parksList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
