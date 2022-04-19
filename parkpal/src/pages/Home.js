import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import ParksList from "./ParksList.js";
import Details from "./Details";
import ParkCard from "../components/ParkCard.js";
import Search from "../components/Search.js";

function Home({ parksList }) {
  const [showDetails, setShowDetails] = useState(false);
  const [parkDetails, setParkDetails] = useState({});
  const [currSearch, setCurrSearch] = useState("");

  const viewDetails = (park) => {
    console.log(park);
    setShowDetails((showDetails) => !showDetails);
    setParkDetails(park);
  };
  console.log("details: ", parkDetails);

  return (
    <div>
      Home Page
      {showDetails ? (
        // <Switch>
        //   <Route exact path="/details">
        <Details parksList={parksList} park={parkDetails} />
      ) : (
        //   </Route>
        // </Switch><Search />
        <div>
          <div>
            <img
              //src="https://www.ourescapeclause.com/wp-content/uploads/2020/11/shutterstock_295670498-scaled.jpg"
              src="https://images.fineartamerica.com/images-medium-large-5/arches-national-park-panorama-dave-mills.jpg"
              alt="other"
              className="background-img"
            ></img>
            <form>
              <span>
                <input
                  type="text"
                  name="search"
                  value={currSearch}
                  placeholder="search..."
                ></input>
                <button>Search</button>
              </span>
            </form>
          </div>
          <ParksList parksList={parksList} someAction={viewDetails} />
        </div>
      )}
    </div>
  );
}

export default Home;
