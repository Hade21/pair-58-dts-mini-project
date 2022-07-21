import React from "react";
import { CardProfile } from "../../molecule";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();

  const linkToLogin = () => {
    navigate("/login");
  };

  const url = [
    "https://cdn2.vectorstock.com/i/1000x1000/17/61/male-avatar-profile-picture-vector-10211761.jpg",
    "https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png",
    "https://cdn4.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-2-1024.png",
    "https://cdn5.vectorstock.com/i/1000x1000/73/04/female-avatar-profile-icon-round-woman-face-vector-18307304.jpg",
  ];
  const users = ["Rohman", "Lutfi", "Sinta", "Risa"];
  const onclick = [linkToLogin, "", "", ""];

  return (
    <div className="wrapper-list flex gap-12 justify-center">
      {users.map((user, i) => {
        return (
          <CardProfile username={user} url={url[i]} onClick={onclick[i]} />
        );
      })}
      <div className="add flex flex-col gap-5 justify-center cursor-pointer">
        <FontAwesomeIcon icon={faPlusSquare} color="white" size="9x" />
        <p className="font-Inter font-medium text-s4 text-putih text-center">
          Add More
        </p>
      </div>
    </div>
  );
};

export default UserList;
