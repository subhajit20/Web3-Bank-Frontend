"use client";
import React from "react";
import TransferEth from "@/components/transferEthComponent/TransferEth";

const page = () => {
  return (
    <React.Fragment>
      <h1 className="text-center">This is transfer page...</h1>
      <TransferEth />
    </React.Fragment>
  );
};

export default page;
