import React from "react";
import ParkCard from "../components/ParkCard";

function ParksList({
  parksList,
  someAction,
  setInBucketList,
  setInBeenThere,
  inBucketList,
  inBeenThere,
}) {
  console.log(parksList);
  const renderParks = parksList.map((park) => {
    return (
      <ParkCard
        key={park.id}
        park={park}
        someAction={someAction}
        setInBucketList={setInBucketList}
        setInBeenThere={setInBeenThere}
        inBucketList={inBucketList}
        inBeenThere={inBeenThere}
      />
    );
  });

  return <div className="wrapper">{renderParks}</div>;
}

export default ParksList;
