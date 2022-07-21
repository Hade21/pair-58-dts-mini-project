import React from "react";

const TopTenCard = ({ rank, image, title }) => {
  return (
    <div className="flex justify-start w-fit m-0 cursor-pointer">
      <img src={rank} alt="ranking" />
      <div className="movie relative group">
        <img src={image} alt="movie-poster" className="h-full" />
        <p className="font-Inter font-medium text-putih text-s4 text-center px-2 py-3 bg-gradient-to-t from-slate-700 via-slate-500 absolute bottom-0 right-0 w-full hidden group-hover:block">
          {title}
        </p>
      </div>
    </div>
  );
};

export default TopTenCard;
