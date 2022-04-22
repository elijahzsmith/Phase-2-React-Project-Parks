import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./NavBar.js";
import Home from "../pages/Home.js";
import Favorites from "../pages/Favorites.js";
import Scavenger from "../pages/Scavenger.js";
import Details from "../pages/Details.js";
import ParksList from "../pages/ParksList.js";

function App() {
  const [parksList, setParksList] = useState([]);
  const [inBucketList, setInBucketList] = useState([]);
  const [inBeenThere, setInBeenThere] = useState([]);
  const [currSearch, setCurrSearch] = useState("");
  const [parkDetails, setParkDetails] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/parks?parkCode=&limit=60&start=10&api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((parksData) => {
        console.log(parksData);
        const shuffleArray = parksData.data.sort(() => Math.random() - 0.5);
        console.log(shuffleArray);
        setParksList(shuffleArray);
      });
  }, []); // removed liked dependency

  const afterSearch = parksList.filter((park) => {
    if (currSearch === "") {
      return park;
    } else if (park.name.toLowerCase().includes(currSearch.toLowerCase())) {
      return park;
    } else {
      return null;
    }
  });

  const viewDetails = (park) => {
    setShowDetails((showDetails) => !showDetails);
    setParkDetails(park);
  };

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
            viewDetails={viewDetails}
            liked={liked}
            setLiked={setLiked}
          />
        </Route>
        <Route exact path="/savedparks">
          <Favorites
            parksList={parksList}
            inBucketList={inBucketList}
            inBeenThere={inBeenThere}
            currSearch={currSearch}
            setCurrSearch={setCurrSearch}
            setInBucketList={setInBucketList}
            setInBeenThere={setInBeenThere}
            liked={liked}
            setLiked={setLiked}
          />
        </Route>
        <Route exact path="/travellog">
          <Scavenger parksList={parksList} />
        </Route>
        <Route exact path="/details">
          <Details parksList={parksList} park={parkDetails} />
        </Route>
        <Route exact="/parkslist">
          <ParksList
            parksList={parksList}
            someAction={viewDetails}
            setInBucketList={setInBucketList}
            setInBeenThere={setInBeenThere}
            inBucketList={inBucketList}
            inBeenThere={inBeenThere}
            currSearch={currSearch}
            afterSearch={afterSearch}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
