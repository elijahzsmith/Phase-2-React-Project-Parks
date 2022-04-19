import React from "react";

function Details({ park }) {
  console.log(park);

  return (
    <div>
      Details
      <h1>{park.fullName}</h1>
      <img src={park.images[0].url} alt="detailedpic"></img>
      <h2>{park.name}</h2>
      <div className="more-info">
        <h3>Directions</h3>
        <h5>{park.directionsInfo}</h5>
        <h3>Entrance Fees</h3>
        <h4>{park.entranceFees.cost}</h4>
        <h5>{park.entranceFees.description}</h5>
        <h4>{park.entranceFees.title}</h4>
        <h3>Entrance Passes</h3>
        <h5>{park.entrancePasses}</h5>
      </div>
    </div>
  );
}

export default Details;
