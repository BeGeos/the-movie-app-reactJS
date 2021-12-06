import React from "react";

const PROFILE_PIC_URL = "https://image.tmdb.org/t/p/w300";

const CastCard = ({ details }) => {
  return (
    <div className="cast__card">
      <img
        src={`${PROFILE_PIC_URL}${details.profile_path}`}
        alt={`profile-pic-${details.name}`}
        className="cast__profile-pic"
      />
      <div className="cast__details">
        <p>{details.name}</p>
        <h5>{details.job ? details.job : details.character}</h5>
      </div>
    </div>
  );
};

export default CastCard;
