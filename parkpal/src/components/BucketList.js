import React from "react";
import ParkCardFavorites from "./ParkCardFavorites";

function BucketList({ inBucketList }) {
  const renderBucketList = inBucketList.map((park) => {
    console.log(park);
    return <ParkCardFavorites park={park} />;
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
