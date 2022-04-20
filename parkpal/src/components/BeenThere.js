import React from "react";
import ParkCardFavorites from "./ParkCardFavorites";

function BeenThere({ inBeenThere }) {
  const renderBeenThere = inBeenThere.map((park) => {
    console.log(park);
    return <ParkCardFavorites park={park} />;
  });
  const thisManyDown = inBeenThere.length;

  return (
    <div>
      <h1>Already Been 🌲</h1>
      <h2>{thisManyDown} down</h2>
      {thisManyDown > 4 ? <h3>Well traveled!</h3> : null}
      {renderBeenThere}
    </div>
  );
}

export default BeenThere;
