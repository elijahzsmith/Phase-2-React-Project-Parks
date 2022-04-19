import React from "react";

function Details({ park }) {
  console.log(park);

  const renderAllImages = park.images.map((image) => {
    return <img src={image.url} alt={image.title} className="detailimg"></img>;
  });

  //   const renderAllActivities = park.activites.map((activity) => {
  //     console.log(activity);
  //     // return <h3 key={activity.name}>{activity.name}</h3>;
  //   });

  return (
    <div>
      Details
      <h1>{park.fullName}</h1>
      <img src={park.images[0].url} alt="detailedpic"></img>
      <h2>{park.name}</h2>
      <h4>{park.description}</h4>
      <div>
        {/* <h3>{park.activities.name}</h3> */}
        {/* {renderAllActivities} */}
      </div>
      <div className="more-info">
        <h3>Directions</h3>
        <h5>{park.directionsInfo}</h5>
        <h3>Entrance Fees</h3>
        <h4>{park.entranceFees[0].cost}</h4>
        <h5>{park.entranceFees[0].description}</h5>
        <h4>{park.entranceFees[0].title}</h4>

        {park.entrancePasses.length === 0 ? null : (
          <div>
            <h3>Entrance Passes</h3>
            <h5>{park.entrancePasses[0]}</h5>
            <h6>{park.entrancePasses[0]}</h6>
          </div>
        )}
        {renderAllImages}
      </div>
    </div>
  );
}

export default Details;
