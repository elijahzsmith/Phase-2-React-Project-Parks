import React, { useState } from "react";

function Scavenger() {
  // const [formData, setFormData] = useState({
  //   sighting: "",
  //   location: "",
  //   photo: "",
  // });
  const [catSelect, setCatSelect] = useState("Pick a category");
  const [sightingInput, setSightingInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [photoInput, setPhotoInput] = useState("");
  const [storyInput, setStoryInput] = useState("");

  console.log(catSelect, sightingInput, locationInput, photoInput, storyInput);
  return (
    <div>
      <h1>Scavenger Hunt</h1>
      <h3>
        Here to continue on the spirit created by the Junior Ranger Program
      </h3>
      <div className="formcontainer">
        <form>
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
      <div>{/* render sightings here */}</div>
    </div>
  );
}

export default Scavenger;
