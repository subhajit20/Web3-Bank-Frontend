"use client";
import React from "react";
import Input from "../ui/inputs/Input";

const TransferEth = () => {
  return (
    <section className="min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-3 place-content-center min-h-[30rem] max-w-full justify-center gap-y-5">
        <div className="justify-self-center w-full grid grid-cols-1 justify-center">
          <Input
            _className="input-ghost-secondary input mt-10 max-w-[15rem] md:max-w-[26rem] place-self-center font-bold text-white"
            _placeholder={"Enter Sender's Public Key"}
          />
          <Input
            _className="input-ghost-secondary input mt-10 max-w-[15rem] md:max-w-[26rem] place-self-center font-bold text-white"
            _placeholder={"Enter Ether Amount"}
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 justify-self-center place-self-center"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
          />
        </svg>
        <Input
          _className="input-ghost-secondary input mt-10 max-w-[15rem] md:max-w-[26rem] place-self-center font-bold text-white"
          _placeholder={"Enter Receiver's Public Key"}
        />
      </section>
      <div className="grid grid-cols-1 justify-center w-full">
        <button className="btn btn-outline-success max-w-[10rem] w-[50rem] justify-self-center">
          Transfer
        </button>
      </div>
    </section>
  );
};

export default TransferEth;
