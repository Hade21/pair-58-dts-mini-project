import React from "react";
import { Logo } from "../../assets";
import { UserList } from "../../components";

const Profile = () => {
  return (
    <body className="bg-black w-full h-screen">
      <header className="p-8">
        <img src={Logo} alt="logo" className="w-12 h-128" />
      </header>
      <main className="w-full h-full">
        <h1 className="text-putih font-Inter font-medium text-s1 mb-5">
          Who's Watching?
        </h1>
        <div className="cards w-5/6 mx-auto">
          <UserList />
        </div>
      </main>
    </body>
  );
};

export default Profile;
