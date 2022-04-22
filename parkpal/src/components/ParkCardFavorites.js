import React, { useState } from "react";

function ParkCardFavorites({
  park,
  currSearch,
  setCurrSearch,
  handleRemove,
  liked,
  setLiked,
  inBucketList,
  setInBucketList,
  setInBeenThere,
  handleClick,
  likedText,
}) {
  return (
    <div>
      <div className="ui-card">
        <img src={park.images[0].url} alt="ParkImg" className="cardimg" />
        <h3>{park.name}</h3>
        <h4>
          <em>{park.states}, US</em>
        </h4>
        <p>{park.description}</p>
        <span>
          <button onClick={() => handleRemove(park)}>Remove</button>
          <button onClick={() => handleClick(park)}>{likedText}</button>
        </span>
      </div>
    </div>
  );
}

export default ParkCardFavorites;
