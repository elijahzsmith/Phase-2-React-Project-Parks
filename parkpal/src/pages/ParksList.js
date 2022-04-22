import React from "react";
import ParkCard from "../components/ParkCard";

function ParksList({
  parksList,
  someAction,
  setInBucketList,
  setInBeenThere,
  inBucketList,
  inBeenThere,
  currSearch,
  afterSearch,
  liked,
  setLiked,
}) {
  const renderParks = afterSearch.map((park) => {
    return (
      <ParkCard
        key={park.id}
        park={park}
        someAction={someAction}
        setInBucketList={setInBucketList}
        setInBeenThere={setInBeenThere}
        inBucketList={inBucketList}
        inBeenThere={inBeenThere}
        currSearch={currSearch}
        liked={liked}
        setLiked={setLiked}
      />
    );
  });

  return (
    <div>
      <h1>Our Great National Parks, Historic Sites and Landmarks</h1>
      <div className="wrapper">{renderParks}</div>
    </div>
  );
}

export default ParksList;
