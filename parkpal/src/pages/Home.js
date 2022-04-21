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
  parkDetails,
  setParkDetails,
  showDetails,
  setShowDetails,
}) {
  return (
    <div>
      <div>
        <img
          // src="https://images.fineartamerica.com/images-medium-large-5/arches-national-park-panorama-dave-mills.jpg"
          src={`https://www.pngkit.com/png/full/255-2558378_mile-high-continuing-care-rocky-mountains.png`}
          alt="other"
          className="background-img"
        ></img>
        <span>
          <input
            type="text"
            name="search"
            value={currSearch}
            placeholder="search..."
            onChange={(e) => setCurrSearch(e.target.value)}
          ></input>
        </span>
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
      />
      {/* {showDetails ? (
        <Details parksList={parksList} park={parkDetails} />
      ) : null} */}
      {/* <Details parksList={parksList} park={parkDetails} /> */}
    </div>
  );
}

export default Home;
