import React, { useState } from "react";

function ParkCardFavorites({ park, currSearch, setCurrSearch }) {
  console.log(currSearch);

  return (
    <div>
      <div className="ui-card">
        <img src={park.images[0].url} alt="ParkImg" className="cardimg" />
        <h3>{park.name}</h3>
        <h4>{park.designation}</h4>
        <h4>
          <em>states, US</em>
        </h4>
        <button>
          <strong>
            <em>More Info</em>
          </strong>
        </button>
        <p>{park.description}</p>
        <span>
          <input
            onChange={(e) => setCurrSearch(e.target.value)}
            type="text"
            name="comment"
            value=""
            placeholder="Leave a comment!"
          ></input>
          <button>Submit</button>
        </span>
        <button>Like ♡</button>
        <button>Remove from list</button>
      </div>
    </div>
  );
}

export default ParkCardFavorites;
