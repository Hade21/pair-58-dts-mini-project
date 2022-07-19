import React from "react";

const OutlinedButton = (props) => {
  const { children, type, px, py, onClick } = props;
  return (
    <button
      type={type}
      className={`text-putih-op30% border-2 border-putih-op30% font-Inter font-normal md:text-s5 w-fit hover:text-putih hover:border-putih ${px} ${py}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default OutlinedButton;
