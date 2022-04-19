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

  return (
    <div className="ui-card">
      ParkCard
      <img src={images[0].url} alt="ParkImg" />
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
      <h4>{description}</h4>
      <span>
        <button>Add To Bucket List</button>
        <button>I've Been Here!</button>
      </span>
    </div>
  );
}

export default ParkCard;
