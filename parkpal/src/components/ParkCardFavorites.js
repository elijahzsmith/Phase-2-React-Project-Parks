import React from "react";

function ParkCardFavorites({ park, currSearch, setCurrSearch, handleRemove }) {
  console.log(park);

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
          <form>
            <span>
              <input
                type="text"
                name="comment"
                value=""
                placeholder="Leave a comment!"
              ></input>
              <button>Submit</button>
            </span>
          </form>
          <button>Like ♡</button>
        </span>
        <button onClick={() => handleRemove(park)}>Remove from list</button>
      </div>
    </div>
  );
}

export default ParkCardFavorites;
