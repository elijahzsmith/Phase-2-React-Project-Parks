import React from "react";
import { useHistory } from "react-router-dom";

function ParkCard({
  park,
  someAction,
  setInBucketList,
  setInBeenThere,
  inBucketList,
  inBeenThere,
}) {
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

  const history = useHistory();

  const newFavorite = {
    description: description,
    images: images,
    name: name,
    states: states,
  };

  const configObjPOST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newFavorite),
  };

  const handleClick = (park) => {
    someAction(park);
  };

  const handleHistory = () => {
    history.push("/details");
  };

  const handleBucketList = (park) => {
    console.log("Clicked Bucket List!", park);
    console.log("Clicked Been Here!", park);
    fetch(`http://localhost:3000/parks`, configObjPOST)
      .then((res) => res.json())
      .then((data) => {
        setInBucketList([...inBucketList, data]);
        //alert("Added to Bucket List!");
      });
  };

  const handleBeenHere = (park) => {
    console.log("Clicked Been Here!", park);
    fetch(`http://localhost:3000/parks`, configObjPOST)
      .then((res) => res.json())
      .then((data) => {
        setInBeenThere([...inBeenThere, data]);
        //alert("Added to Your Parks!");
      });
  };

  return (
    <div className="ui-card">
      <img src={images[0].url} alt="ParkImg" className="cardimg" />
      <h3>{name}</h3>
      <h4>{designation}</h4>
      <h4>
        <em>{states}, US</em>
      </h4>
      <button onClick={() => handleClick(park)}>
        <strong>
          <em>More Info</em>
        </strong>
      </button>
      <p>{description}</p>
      <span>
        <button onClick={() => handleBucketList(park)}>
          Add To Bucket List
        </button>
        <button onClick={() => handleBeenHere(park)}>I've Been Here!</button>
      </span>
    </div>
  );
}

export default ParkCard;

// dont render a more button for parks that dont have the necessary data
