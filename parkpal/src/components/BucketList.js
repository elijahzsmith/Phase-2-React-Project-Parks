import React from "react";
import ParkCardFavorites from "./ParkCardFavorites";

function BucketList({ inBucketList, currSearch, setCurrSearch }) {
  const renderBucketList = inBucketList.map((park) => {
    console.log(park);
    return (
      <ParkCardFavorites
        park={park}
        currSearch={currSearch}
        setCurrSearch={setCurrSearch}
      />
    );
  });
  const thisManyToGo = inBucketList.length;
  return (
    <div>
      <h1>BucketList 📍</h1>
      <h2>{thisManyToGo} to go</h2>
      {thisManyToGo === 0 ? <h3>Well done!</h3> : null}
      {renderBucketList}
    </div>
  );
}

export default BucketList;
