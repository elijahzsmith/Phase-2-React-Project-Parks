import React from "react";
import BeenThere from "../components/BeenThere";
import BucketList from "../components/BucketList";

function Favorites() {
  return (
    <div>
      <h1>Favorites</h1>
      <div>{/* render sightings here */}</div>
      <div>
        <div>
          <BucketList />
          <BeenThere />
        </div>
      </div>
    </div>
  );
}

export default Favorites;
