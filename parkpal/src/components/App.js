import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./NavBar.js";
import Home from "../pages/Home.js";
import Favorites from "../pages/Favorites.js";
import Scavenger from "../pages/Scavenger.js";

function App() {
  const [parksList, setParksList] = useState([]);
  const [inBucketList, setInBucketList] = useState([]);
  const [inBeenThere, setInBeenThere] = useState([]);
  const [currSearch, setCurrSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/parks?&api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((parksData) => {
        setParksList(parksData.data);
      });
  }, []);

  console.log(currSearch);

  const afterSearch = parksList.filter((park) => {
    if (currSearch === "") {
      return park;
    } else if (park.name.toLowerCase().includes(currSearch.toLowerCase())) {
      return park;
    } else {
      return null;
    }
  });

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home
            parksList={parksList}
            setInBucketList={setInBucketList}
            setInBeenThere={setInBeenThere}
            inBucketList={inBucketList}
            inBeenThere={inBeenThere}
            currSearch={currSearch}
            setCurrSearch={setCurrSearch}
            afterSearch={afterSearch}
          />
        </Route>
        <Route exact path="/favorites">
          <Favorites
            parksList={parksList}
            inBucketList={inBucketList}
            inBeenThere={inBeenThere}
            currSearch={currSearch}
            setCurrSearch={setCurrSearch}
          />
        </Route>
        <Route exact path="/scavenger">
          <Scavenger parksList={parksList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
