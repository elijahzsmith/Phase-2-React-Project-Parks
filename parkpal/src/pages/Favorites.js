import React from "react";
import BeenThere from "../components/BeenThere";
import BucketList from "../components/BucketList";

function Favorites({ inBucketList, inBeenThere, currSearch, setCurrSearch }) {
  return (
    <div>
      <h1>Favorites</h1>
      <div>{/* render sightings here */}</div>
      <div>
        <div>
          <BucketList
            inBucketList={inBucketList}
            currSearch={currSearch}
            setCurrSearch={setCurrSearch}
          />
          <BeenThere
            inBeenThere={inBeenThere}
            currSearch={currSearch}
            setCurrSearch={setCurrSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default Favorites;
