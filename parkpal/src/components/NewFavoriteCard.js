import React, { useState } from "react";

function NewFavoriteCard({
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
  handleMove,
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
          <button onClick={() => handleMove(park)}>Move to Been There</button>
          <button onClick={() => handleRemove(park)}>Remove</button>
          <button onClick={() => handleClick(park)}>{likedText}</button>
        </span>
      </div>
    </div>
  );
}

export default NewFavoriteCard;
