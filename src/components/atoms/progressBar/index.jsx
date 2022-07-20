import React from "react";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="bar w-5/6 h-1 bg-midgray mx-auto">
      <div className={`progress ${percentage} h-1 bg-merah`}></div>
    </div>
  );
};

export default ProgressBar;
