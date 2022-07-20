import React from "react";

const CardMovie = ({ width, height, data, key }) => {
  return (
    <div className="h-0 pt-2/3 pb-2/3 relative">
      <img
        src={data.image}
        alt="poster-movie"
        className="absolute inset-0 object-cover w-full h-full rounded-lg"
      />
    </div>
  );
};

export default CardMovie;
