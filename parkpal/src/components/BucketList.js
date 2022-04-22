import React, { useState } from "react";
import ParkCardFavorites from "./ParkCardFavorites";

function BucketList({
  inBucketList,
  setInBucketList,
  currSearch,
  setCurrSearch,
  handleRemove,
  liked,
  setLiked,
  sendData,
}) {
  const likedText = liked ? "Liked ♥" : "Like ♡";
  const [likeText, setLikeText] = useState(likedText);
  const handleLikeBucketList = (park) => {
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
        const afterLike = inBucketList.map((item) =>
          item.id !== park.id ? park : item
        );
        setInBucketList(afterLike);
        // const likedText = liked ? "Liked ♥" : "Like ♡";
        setLikeText(liked ? "Liked ♥" : "Like ♡");
      });
    //return liked ? "Liked ♥" : "Like ♡";
  };
  const renderBucketList = inBucketList.map((park) => {
    return (
      <ParkCardFavorites
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
