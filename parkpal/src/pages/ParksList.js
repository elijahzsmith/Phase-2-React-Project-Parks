import React from "react";
import ParkCard from "../components/ParkCard";

function ParksList({ parksList, someAction }) {
  console.log(parksList);
  const renderParks = parksList.map((park) => {
    return <ParkCard key={park.id} park={park} someAction={someAction} />;
  });

  return <div className="wrapper">{renderParks}</div>;
}

export default ParksList;
