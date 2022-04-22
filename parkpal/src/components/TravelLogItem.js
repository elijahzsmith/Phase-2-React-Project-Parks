import React from "react";

function TravelLogItem({ log, handleClick, logList }) {
  console.log(log);

  const { catSelect, sightingInput, locationInput, photoInput, storyInput } =
    log;
  return (
    <div className="ui-card">
      <h5>Travel Log: Entry #{logList.indexOf(log) + 1}</h5>
      <h2>{catSelect}</h2>
      <h3>{sightingInput}</h3>
      <h4>{locationInput}</h4>
      <img src={photoInput} alt="pic" />
      <p>{storyInput}</p>
      <button onClick={() => handleClick(log)}>Delete Log</button>
    </div>
  );
}

export default TravelLogItem;
