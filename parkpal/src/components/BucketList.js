import React from "react";
import ParkCardFavorites from "./ParkCardFavorites";

function BucketList({ inBucketList, currSearch, setCurrSearch, handleRemove }) {
  const renderBucketList = inBucketList.map((park) => {
    return (
      <ParkCardFavorites
        park={park}
        currSearch={currSearch}
        setCurrSearch={setCurrSearch}
        handleRemove={handleRemove}
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
