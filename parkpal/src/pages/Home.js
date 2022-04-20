import React, { useState } from "react";
import ParksList from "./ParksList.js";
import Details from "./Details";

function Home({
  parksList,
  setInBucketList,
  setInBeenThere,
  inBucketList,
  inBeenThere,
  currSearch,
  setCurrSearch,
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [parkDetails, setParkDetails] = useState({});
  //const [currSearch, setCurrSearch] = useState("");

  const viewDetails = (park) => {
    setShowDetails((showDetails) => !showDetails);
    setParkDetails(park);
  };

  return (
    <div>
      Home Page
      {showDetails ? (
        <Details parksList={parksList} park={parkDetails} />
      ) : (
        <div>
          <div>
            <img
              src="https://images.fineartamerica.com/images-medium-large-5/arches-national-park-panorama-dave-mills.jpg"
              alt="other"
              className="background-img"
            ></img>
            <form>
              <span>
                <input
                  type="text"
                  name="search"
                  value={currSearch}
                  placeholder="search..."
                ></input>
                <button>Search</button>
              </span>
            </form>
          </div>
          <ParksList
            parksList={parksList}
            someAction={viewDetails}
            setInBucketList={setInBucketList}
            setInBeenThere={setInBeenThere}
            inBucketList={inBucketList}
            inBeenThere={inBeenThere}
            currSearch={currSearch}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
