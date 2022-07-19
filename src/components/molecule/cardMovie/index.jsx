import React from "react";
import Poster from "../../../assets/icons/MoviePoster.png";

const CardMovie = (props) => {
  const { width, height, progressBar } = props;

  const progress = () => {
    const percentage = 20;
    console.log(percentage);
    return (
      <div className="bar w-5/6 h-1 bg-midgray mx-auto">
        <div className={`progress w-[${percentage}%] h-1 bg-merah`}></div>
      </div>
    );
  };

  return (
    <div>
      <img src={Poster} alt="poster-movie" className={`${width} ${height}`} />
      {progressBar ? progress : null}
    </div>
  );
};

export default CardMovie;
