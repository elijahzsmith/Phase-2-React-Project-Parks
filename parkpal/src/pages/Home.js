import React, { useState } from "react";
import ParksList from "./ParksList.js";
import Details from "./Details";

function Home({
  parksList,
  setInBucketList,
  setInBeenThere,
  inBucketList,
  inBeenThere,
  currSearch,
  setCurrSearch,
  afterSearch,
  viewDetails,
  liked,
  setLiked,
  parkDetails,
  setParkDetails,
  showDetails,
  setShowDetails,
}) {
  return (
    <div>
      <div className="homecontainer">
        <img
          src={`https://www.pngkit.com/png/full/255-2558378_mile-high-continuing-care-rocky-mountains.png`}
          alt="other"
          className="background-img"
        ></img>

        <div className="centerish">
          <h1 className="whitetext">ParkPal</h1>
          <h4 className="whitetext">Find your dream location</h4>
          <input
            type="text"
            name="search"
            value={currSearch}
            placeholder="search..."
            className="home-input"
            onChange={(e) => setCurrSearch(e.target.value)}
          ></input>
        </div>
      </div>
      <ParksList
        parksList={parksList}
        someAction={viewDetails}
        setInBucketList={setInBucketList}
        setInBeenThere={setInBeenThere}
        inBucketList={inBucketList}
        inBeenThere={inBeenThere}
        currSearch={currSearch}
        afterSearch={afterSearch}
        liked={liked}
        setLiked={setLiked}
      />
    </div>
  );
}

export default Home;
