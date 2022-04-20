import React from "react";
import BeenThere from "../components/BeenThere";
import BucketList from "../components/BucketList";

function Favorites({ inBucketList, inBeenThere }) {
  return (
    <div>
      <h1>Favorites</h1>
      <div>{/* render sightings here */}</div>
      <div>
        <div>
          <BucketList inBucketList={inBucketList} />
          <BeenThere inBeenThere={inBeenThere} />
        </div>
      </div>
    </div>
  );
}

export default Favorites;
