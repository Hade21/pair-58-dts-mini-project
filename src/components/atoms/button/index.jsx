import React from "react";

const Button = (props) => {
  const { type, children, onClick } = props;
  return (
    <>
      <button
        type={type}
        className="xl:py-8 md:py-6 py-4 shadow-sm shadow-slate-700 text-center text-white bg-merah rounded font-Inter tracking-[0.16em] font-bold xl:text-s2 md:text-s3 w-full"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
