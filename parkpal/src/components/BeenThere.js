import React from "react";
import ParkCardFavorites from "./ParkCardFavorites";

function BeenThere({ inBeenThere }) {
  const renderBeenThere = inBeenThere.map((park) => {
    console.log(park);
    return <ParkCardFavorites park={park} />;
  });
  console.log(renderBeenThere);

  return (
    <div>
      <h1>Already Been 🌲</h1>
      {renderBeenThere}
    </div>
  );
}

export default BeenThere;
