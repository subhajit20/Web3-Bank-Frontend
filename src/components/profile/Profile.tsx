"use client";
import React from "react";
import NamePlate1 from "@/components/ui/nameplate/NamePlate";
import Link from "next/link";

const Profile = () => {
  return (
    <main className="grid grid-cols-1 justify-start place-content-center min-h-screen gap-y-2">
      <h1 className="place-self-center text-2xl">My Profile</h1>
      <input
        className="input-ghost-secondary input mt-10 max-w-[15rem] md:max-w-[26rem] place-self-center"
        placeholder="Account Hash"
      />
      <input
        className="input-ghost-secondary input mt-10 max-w-[15rem] md:max-w-[26rem] place-self-center"
        placeholder="Enter Your Name"
      />
      <input
        className="input-ghost-secondary input mt-10 max-w-[15rem] md:max-w-[26rem] place-self-center"
        placeholder="Total Balance"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center  max-w-[20rem] md:max-w-[26rem] gap-x-4 mt-3 place-self-center">
        <button className="btn btn-outline-warning">Save Changes</button>
      </div>
    </main>
  );
};

export default Profile;
