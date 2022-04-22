import React, { useState, useEffect } from "react";
import TravelLog from "../components/TravelLog";

function Scavenger() {
  const [catSelect, setCatSelect] = useState("Pick a category");
  const [sightingInput, setSightingInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [photoInput, setPhotoInput] = useState("");
  const [storyInput, setStoryInput] = useState("");

  const [logList, setLogList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/travellog`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLogList(data);
      });
  }, []);

  const newLog = {
    catSelect,
    sightingInput,
    locationInput,
    photoInput,
    storyInput,
  };

  const configObjPOST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newLog),
  };

  const handleSubmit = () => {
    fetch(`http://localhost:3000/travellog`, configObjPOST)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLogList([...logList, data]);
      });
  };

  console.log(catSelect, sightingInput, locationInput, photoInput, storyInput);
  return (
    <div className="scavengerpage">
      <div className="loghead">
        <img
          src="https://www.downloadclipart.net/large/mountain-transparent-background.png"
          alt="mtn"
        ></img>
        <h3>Here to Inspire and Remember</h3>
        <h1>Travel Log</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <h4>Enter New Log:</h4>
          <select
            name="category"
            className="category"
            onChange={(e) => setCatSelect(e.target.value)}
          >
            <option value="initial">Pick a category</option>
            <option value="animal">Animal</option>
            <option value="plant">Plant</option>
            <option value="location">Location</option>
          </select>
          <input
            onChange={(e) => setSightingInput(e.target.value)}
            type="text"
            name="sighting"
            value={sightingInput}
            placeholder="What you saw..."
            required
          ></input>
          <input
            onChange={(e) => setLocationInput(e.target.value)}
            type="text"
            name="location"
            value={locationInput}
            placeholder="Where you saw it..."
            required
          ></input>
          <input
            onChange={(e) => setPhotoInput(e.target.value)}
            type="text"
            name="photo"
            value={photoInput}
            placeholder="Photo URL..."
          ></input>
          <textarea
            placeholder="Tell your story..."
            onChange={(e) => setStoryInput(e.target.value)}
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
      <div className="logpage">
        <TravelLog logList={logList} />
      </div>
    </div>
  );
}

export default Scavenger;
