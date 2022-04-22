import React, { useState } from "react";
//import ParkCardFavorites from "./ParkCardFavorites";
import NewFavoriteCard from "./NewFavoriteCard";

function BucketList({
  inBucketList,
  setInBucketList,
  currSearch,
  setCurrSearch,
  handleRemove,
  liked,
  setLiked,
  sendData,
  handleMove,
}) {
  const likedText = liked ? "Liked ♥" : "Like ♡";
  const [likeText, setLikeText] = useState(likedText);
  const handleLikeBucketList = (park) => {
    console.log(park);
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

    fetch(`http://localhost:3000/bucketlist/${park.id}`, configObjPATCH)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const afterLike = inBucketList.find((item) =>
          item.id === park.id ? likedText : null
        );
        const afterFind = inBucketList.map((item) => {
          return item.id === afterLike.id ? afterLike : item;
        });
        console.log(afterLike);
        console.log(afterFind);
        const likebuttontext = inBucketList.find((item) =>
          item.id === park.id ? "Liked ♥" : "Like ♡"
        );
        console.log(likebuttontext);
        setLikeText(likedText);
        //setInBucketList(afterLike);
      });
  };
  const renderBucketList = inBucketList.map((park) => {
    return (
      <NewFavoriteCard
        park={park}
        currSearch={currSearch}
        setCurrSearch={setCurrSearch}
        handleRemove={handleRemove}
        liked={liked}
        setLiked={setLiked}
        inBucketList={inBucketList}
        setInBucketList={setInBucketList}
        handleClick={handleLikeBucketList}
        likedText={likeText}
        handleMove={handleMove}
      />
    );
  });
  const thisManyToGo = inBucketList.length;
  return (
    <div>
      <h1>BucketList 📍</h1>
      <h2>{thisManyToGo} to go</h2>
      {thisManyToGo === 0 ? <h3>Well done!</h3> : null}
      {renderBucketList}
    </div>
  );
}

export default BucketList;
