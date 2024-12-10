import React, { useState,useEffect } from 'react';
import pfp from "../assets/pfp.png"

const Profile = () => {
    const [user, setUser] = useState({ name: "", email: "" });
    useEffect(()=>{
        const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    if (name && email) {
      setUser({ name, email });
    }
    },[])

  return (
    <div className=" mt-10 p-10 bg-white shadow-md rounded-lg inline-block items-center absolute left-[40%] w-[20%]">
      <div className="flex flex-col items-center gap-10">
        <img
          src={pfp}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-2xl font-semibold text-[40px] font-alice">{user.name.toUpperCase()}</h2>
        <p className="text-gray-600 mb-4 text-[20px] font-alice">Email: {user.email}</p>
      </div>
      
    </div>
  );
};

export default Profile;
