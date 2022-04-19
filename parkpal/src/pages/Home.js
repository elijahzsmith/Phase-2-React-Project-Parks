import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import ParksList from "./ParksList.js";
import Details from "./Details";
import ParkCard from "../components/ParkCard.js";
import Search from "../components/Search.js";

function Home({ parksList }) {
  const [showDetails, setShowDetails] = useState(false);
  const [parkDetails, setParkDetails] = useState({});

  //const parkInfo = parksList.filter(() => {});

  // const toShowDetails = (park) => {
  //   console.log(park);
  //   const renderDetails = parksList.filter((thisPark) =>
  //     park.id === thisPark.id ? <ParkCard key={park.id} /> : null
  //   );
  //   console.log(renderDetails);
  //   return renderDetails;
  // };
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
              src="https://www.ourescapeclause.com/wp-content/uploads/2020/11/shutterstock_295670498-scaled.jpg"
              alt="other"
              className="background-img"
            ></img>
          </div>
          <ParksList parksList={parksList} someAction={viewDetails} />
        </div>
      )}
    </div>
  );
}

export default Home;
