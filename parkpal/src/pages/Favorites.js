import React, { useEffect } from "react";
import BeenThere from "../components/BeenThere";
import BucketList from "../components/BucketList";

function Favorites({
  inBucketList,
  inBeenThere,
  currSearch,
  setCurrSearch,
  setInBucketList,
  setInBeenThere,
  liked,
  setLiked,
}) {
  // const receiveData = (data) => {
  //   console.log(data);
  // };

  useEffect(() => {
    fetch(`http://localhost:3000/beenthere`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInBeenThere(data);
      });

    fetch(`http://localhost:3000/bucketlist`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInBucketList(data);
      });
  }, []);

  const removeFromBucketList = (park) => {
    fetch(`http://localhost:3000/bucketlist/${park.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("deleted", data);
        const afterDelete = inBucketList.filter((item) => item.id !== park.id);
        setInBucketList(afterDelete);
      });
  };

  const removeFromBeenThere = (park) => {
    fetch(`http://localhost:3000/beenthere/${park.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("deleted", data);
        const afterDelete = inBeenThere.filter((item) => item.id !== park.id);
        setInBeenThere(afterDelete);
      });
  };

  return (
    <div>
      <h1>Favorites</h1>
      <div>
        <div className="favoriteslistcontainer">
          <div className="bucketlistcontainer">
            <BucketList
              inBucketList={inBucketList}
              setInBucketList={setInBucketList}
              currSearch={currSearch}
              setCurrSearch={setCurrSearch}
              handleRemove={removeFromBucketList}
              liked={liked}
              setLiked={setLiked}
              //sendData={receiveData}
            />
          </div>
          <div className="beentherecontainer">
            <BeenThere
              inBeenThere={inBeenThere}
              setInBeenThere={setInBeenThere}
              currSearch={currSearch}
              setCurrSearch={setCurrSearch}
              handleRemove={removeFromBeenThere}
              liked={liked}
              setLiked={setLiked}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
