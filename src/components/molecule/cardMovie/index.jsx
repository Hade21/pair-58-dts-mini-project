import React from "react";
import { useNavigate } from "react-router-dom";

const CardMovie = ({ data, id }) => {
  const navigate = useNavigate();

  const linkToDetail = () => {
    const endpoint = `/movie/${id}`;
    navigate(endpoint);
  };

  return (
    <div
      className="h-0 pt-2/3 pb-2/3 relative cursor-pointer"
      onClick={linkToDetail}
    >
      <img
        src={data.image}
        alt="poster-movie"
        className="absolute inset-0 object-cover w-full h-full rounded-lg peer cursor-pointer"
      />
      <p className="font-Inter w-full font-bold text-s5 text-white text-center px-2 py-4 rounded-b-lg bg-gradient-to-t from-slate-700 via-slate-600 absolute bottom-0 hidden peer-hover:block">
        {data.title}
      </p>
    </div>
  );
};

export default CardMovie;
