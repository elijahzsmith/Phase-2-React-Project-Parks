import React, { useState } from "react";

function Scavenger() {
  const [formData, setFormData] = useState("");
  return (
    <div>
      <h1>Scavenger Hunt</h1>
      <h3>
        Here to continue on the spirit created by the Junior Ranger Program
      </h3>
      <form>
        <select name="category" className="category">
          <option value="initial">Pick a category</option>
          <option value="animal">Animal</option>
          <option value="plant">Plant</option>
          <option value="location">Location</option>
        </select>
        <input
          type="text"
          name="sighting"
          value={formData}
          placeholder="What you saw..."
        ></input>
        <input
          type="text"
          name="location"
          value={formData}
          placeholder="Where you saw it..."
        ></input>
        <input
          type="text"
          name="photo"
          value={formData}
          placeholder="Photo URL..."
        ></input>
        <button>Submit</button>
      </form>
      <div>{/* render sightings here */}</div>
    </div>
  );
}

export default Scavenger;
