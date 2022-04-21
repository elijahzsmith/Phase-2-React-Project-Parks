import React from "react";
import BeenThere from "../components/BeenThere";
import BucketList from "../components/BucketList";

function Favorites({ inBucketList, inBeenThere, currSearch, setCurrSearch }) {
  const removeFromBucketList = (park) => {
    fetch(`http://localhost:3000/parks/${park.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("deleted", data);
        // const afterDelete = inBucketList;
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
            // handleRemove={removeFromList}
          />
        </div>
      </div>
    </div>
  );
}

export default Favorites;
