import React from "react";

const CardProfile = ({ url, username, onClick }) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <img src={url} alt="profile" className="w-full h-full object-cover" />
      <h3 className="font-Inter font-medium text-putih text-s3 text-center mt-2">
        {username}
      </h3>
    </div>
  );
};

export default CardProfile;
