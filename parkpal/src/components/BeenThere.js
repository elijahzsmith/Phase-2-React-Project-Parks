import React, { useState } from "react";
import ParkCardFavorites from "./ParkCardFavorites";

function BeenThere({
  inBeenThere,
  setInBeenThere,
  handleRemove,
  liked,
  setLiked,
}) {
  const likedText = liked ? "Liked ♥" : "Like ♡";
  const [likeText, setLikeText] = useState(likedText);

  const handleLikeBeenThere = (park) => {
    setLiked((liked) => !liked);

    const newLike = { liked: liked };

    const configObjPATCH = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newLike),
    };

    fetch(`http://localhost:3000/beenthere/${park.id}`, configObjPATCH)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const afterLike = inBeenThere.map((item) =>
          item.id === park.id ? park : item
        );

        setLikeText(likedText);
        setInBeenThere(afterLike);
      });
  };
  const renderBeenThere = inBeenThere.map((park) => {
    return (
      <ParkCardFavorites
        park={park}
        handleRemove={handleRemove}
        liked={liked}
        setLiked={setLiked}
        setInBeenThere={setInBeenThere}
        handleClick={handleLikeBeenThere}
        likedText={likeText}
      />
    );
  });
  const thisManyDown = inBeenThere.length;

  return (
    <div>
      <h1>Already Been 🌲</h1>
      <h2>{thisManyDown} down</h2>
      {thisManyDown > 4 ? <h3>Well traveled!</h3> : null}
      {renderBeenThere}
    </div>
  );
}

export default BeenThere;
