import React from "react";

const CardMovieCarousel = ({ data, id }) => {
  return (
    <div className="wrapper relative rounded-lg cursor-pointer">
      <div className="poster h-0 pt-2/3 pb-2/3 relative">
        <img
          src={data.image}
          alt="poster"
          className="absolute inset-0 object-cover w-full h-full rounded-lg"
        />
      </div>
      <div
        className="overview text-putih font-Inter absolute bottom-0 w-full py-4 bg-gradient-to-t from-slate-700 rounded-b-lg
      "
      >
        <h2 className="text-s2 font-bold">{data.title}</h2>
        <p className="text-s4 font-normal">{data.year}</p>
      </div>
      <p className="text-s4 font-normal text-putih font-Inter p-4 bg-merah absolute top-0 right-0 rounded-lg">
        {data.imDbRating}
      </p>
    </div>
  );
};

export default CardMovieCarousel;
