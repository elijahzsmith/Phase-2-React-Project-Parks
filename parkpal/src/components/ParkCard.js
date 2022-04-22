import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";

function ParkCard({
  park,
  someAction,
  setInBucketList,
  setInBeenThere,
  inBucketList,
  inBeenThere,
  currSearch,
  liked,
  setLiked,
}) {
  const [showDesc, setShowDesc] = useState(true);
  const { description, designation, fees, images, name, states } = park;
  const history = useHistory();

  const newFavorite = {
    description: description,
    images: images,
    name: name,
    states: states,
    liked: false,
  };

  const configObjPOST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newFavorite),
  };

  const handleHistory = (park) => {
    history.push("/details");
    someAction(park);
  };

  const handleBucketList = (park) => {
    console.log("Clicked Been Here!", park);
    fetch(`http://localhost:3000/bucketlist`, configObjPOST)
      .then((res) => res.json())
      .then((data) => {
        setInBucketList([...inBucketList, data]);
      });
  };

  const handleBeenHere = (park) => {
    console.log("Clicked Been Here!", park);
    fetch(`http://localhost:3000/beenthere`, configObjPOST)
      .then((res) => res.json())
      .then((data) => {
        setInBeenThere([...inBeenThere, data]);
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
      <NavLink exact to="/details">
        <button onClick={() => handleHistory(park)}>
          <strong>
            <em>More Info</em>
          </strong>
        </button>
      </NavLink>
      <button onClick={() => setShowDesc((showDesc) => !showDesc)}>
        {showDesc ? (
          <em>Hide Description</em>
        ) : (
          <strong>
            <em>Show Description</em>
          </strong>
        )}
      </button>
      {showDesc ? (
        <p>{description}</p>
      ) : (
        <img
          src="https://www.downloadclipart.net/large/mountain-transparent-background.png"
          alt="hiddendesc"
        ></img>
      )}
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
