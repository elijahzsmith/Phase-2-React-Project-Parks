import React from "react";
import { NavLink, Link } from "react-router-dom";

function ParkCard({ park, someAction }) {
  const {
    id,
    url,
    fullName,
    parkCode,
    description,
    activities,
    addresses,
    contacts,
    designation,
    directionsInfo,
    directionsUrl,
    entranceFees,
    entrancePasses,
    fees,
    images,
    latLong,
    latitude,
    longitude,
    name,
    operatingHours,
    states,
    topics,
    weatherInfo,
  } = park;

  const handleClick = (park) => {
    console.log(park);
    someAction(park);
  };

  const handleAdd = () => {
    console.log("Clicked!");
  };

  const handleBeenHere = () => {
    console.log("Clicked!");
  };
  // dont render a more button for parks that dont have the necessary data
  return (
    <div className="ui-card">
      ParkCard
      <img src={images[0].url} alt="ParkImg" className="cardimg" />
      <h3>{name}</h3>
      {/* <NavLink exact path="/details"> */}
      {/* <Link exact path="/details"> */}
      <button onClick={() => handleClick(park)}>
        <strong>
          <em>More Info</em>
        </strong>
      </button>
      {/* </Link> */}
      {/* </NavLink> */}
      <h4>{states}</h4>
      <h4>{description}</h4>
      <span>
        <button onClick={handleAdd}>Add To Bucket List</button>
        <button onClick={handleBeenHere}>I've Been Here!</button>
      </span>
    </div>
  );
}

export default ParkCard;
