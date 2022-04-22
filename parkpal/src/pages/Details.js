import React from "react";

function Details({ park }) {
  console.log("park in DETAILS", park.images);

  const renderAllImages = park.images.map((image) => {
    return (
      <div>
        <img src={image.url} alt={image.title} className="detailimg"></img>
        <p>{image.title}</p>
      </div>
    );
  });

  const renderActivities = park.activities.map((activity) => {
    return <li key={activity.name}>{activity.name}</li>;
  });

  return (
    <div>
      Details
      <h1>{park.fullName}</h1>
      <img
        src={park.images[0].url}
        alt="detailedpic"
        className="maindetailimg"
      ></img>
      <h2>{park.name}</h2>
      <h4>{park.description}</h4>
      <div>
        <h4>Activities:</h4>
        <ul>{renderActivities}</ul>
        <h4>Weather Info</h4>
        <h5>{park.weatherInfo}</h5>
      </div>
      <div className="more-info">
        <h3>Directions</h3>
        <h5>{park.directionsInfo}</h5>
        <h3>Entrance Fees</h3>
        <h4>{park.entranceFees[0].cost}</h4>
        <h5>{park.entranceFees[0].description}</h5>
        <h4>{park.entranceFees[0].title}</h4>

        {/* {park.entrancePasses.length === 0 ? null : (
          <div>
            <h3>Entrance Passes</h3>
            <h5>{park.entrancePasses[0]}</h5>
            <h6>{park.entrancePasses[0]}</h6>
          </div>
        )} */}
        <div className="details-photo-wrapper">{renderAllImages}</div>
      </div>
    </div>
  );
}

export default Details;
