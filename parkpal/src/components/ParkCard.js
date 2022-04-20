import React from "react";

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

  const newFavorite = {
    description: description,
    images: images,
    name: name,
    states: states,
  };
  //console.log("new favorite", newFavorite);

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

  const handleBucketList = (park) => {
    console.log("Clicked Bucket List!", park);
    console.log("Clicked Been Here!", park);
    fetch(`http://localhost:3000/parks`, configObjPOST)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInBucketList([...inBucketList, data]);
      });
  };

  const handleBeenHere = (park) => {
    console.log("Clicked Been Here!", park);
    fetch(`http://localhost:3000/parks`, configObjPOST)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setInBeenThere([...inBeenThere, data]);
      });
  };

  console.log("updated been there", inBeenThere);
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
