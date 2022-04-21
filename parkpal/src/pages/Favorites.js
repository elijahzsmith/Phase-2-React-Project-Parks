import React from "react";
import BeenThere from "../components/BeenThere";
import BucketList from "../components/BucketList";

function Favorites({
  inBucketList,
  inBeenThere,
  currSearch,
  setCurrSearch,
  setInBucketList,
  setInBeenThere,
}) {
  const removeFromBucketList = (park) => {
    fetch(`http://localhost:3000/parks/${park.id}`, {
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
    fetch(`http://localhost:3000/parks/${park.id}`, {
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
        <div>
          <BucketList
            inBucketList={inBucketList}
            currSearch={currSearch}
            setCurrSearch={setCurrSearch}
            handleRemove={removeFromBucketList}
          />
          <BeenThere
            inBeenThere={inBeenThere}
            currSearch={currSearch}
            setCurrSearch={setCurrSearch}
            handleRemove={removeFromBeenThere}
          />
        </div>
      </div>
    </div>
  );
}

export default Favorites;
