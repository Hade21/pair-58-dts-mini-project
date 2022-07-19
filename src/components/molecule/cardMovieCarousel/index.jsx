import React from "react";
import Poster from "../../../assets/icons/MoviePoster.png";

const CardMovieCarousel = () => {
  return (
    <div className="wrapper flex justify-between items-center bg-indigo-900 relative">
      <div className="overview w-5/12 text-putih text-left font-Inter px-12 z-10">
        <h2 className="text-s2 font-bold">The Walking Dead</h2>
        <p className="text-s5 font-normal">Horror . English . Series</p>
        <p className="text-s5 font-light w-5/6">
          The story of Oakland Athletics general manager Billy Beane's
          successful attempt to put together a baseball team on a budget, by
          employing computer-generated analysis to draft his players.
        </p>
      </div>
      <div className="overlay absolute w-5/6 h-full top-0 left-0 bg-gradient-to-r from-indigo-900 via-indigo-900"></div>
      <div className="poster w-7/12">
        <img src={Poster} alt="poster" className="w-full" />
      </div>
    </div>
  );
};

export default CardMovieCarousel;
