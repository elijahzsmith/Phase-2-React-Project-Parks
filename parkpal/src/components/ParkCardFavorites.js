import React from "react";

function ParkCardFavorites({ park }) {
  return (
    <div>
      <div className="ui-card">
        <img src={park.images[0].url} alt="ParkImg" className="cardimg" />
        <h3>name</h3>
        <h4>designation</h4>
        <h4>
          <em>states, US</em>
        </h4>
        <button>
          <strong>
            <em>More Info</em>
          </strong>
        </button>
        <p>description</p>
        <span>
          <button>Add To Bucket List</button>
          <button>I've Been Here!</button>
        </span>
      </div>
    </div>
  );
}

export default ParkCardFavorites;
