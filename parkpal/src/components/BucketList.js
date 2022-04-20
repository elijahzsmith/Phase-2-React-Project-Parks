import React from "react";
import ParkCardFavorites from "./ParkCardFavorites";

function BucketList({ inBucketList }) {
  const renderBucketList = inBucketList.map((park) => {
    console.log(park);
    return <ParkCardFavorites park={park} />;
  });
  return (
    <div>
      <h1>BucketList</h1>
      {renderBucketList}
    </div>
  );
}

export default BucketList;
