import React from "react";

const Input = (props) => {
  const { type, name, id, placeholder, onChange, value } = props;
  return (
    <div className="border-slate-400 border-2 relative rounded w-full">
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="xl:p-8 p-5 text-left tracking-[0.16em] font-Inter xl:text-s2 md:text-s3 text-s4 bg-transparent text-white  opacity-20 placeholder:text-transparent peer focus:opacity-100 focus:outline-none focus:bg-transparent focus:tracking-normal font-bold w-full"
      />
      <label
        htmlFor={id}
        className="text-s6 font-Inter font-bold text-white opacity-20 absolute top-2 left-6 xl:top-3 xl:left-8 tracking-[0.16em] peer-placeholder-shown:xl:top-8 peer-placeholder-shown:xl:left-8 peer-placeholder-shown:md:top-6 peer-placeholder-shown:md:left-6 peer-placeholder-shown:top-5 peer-placeholder-shown:left-6 peer-placeholder-shown:xl:text-s2 peer-placeholder-shown:md:text-s3 peer-placeholder-shown:text-s4 peer-focus:peer-placeholder-shown:opacity-100 transition-all duration-200"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
