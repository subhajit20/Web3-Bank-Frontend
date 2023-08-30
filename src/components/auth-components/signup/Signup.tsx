"use client";
import React from "react";
import Link from "next/link";
import Web3 from "web3";
import Web3Bank from "@/assets/abi/Web3Bank.json";
import { CONTRACT_ADDRESS } from "@/assets/constants/ContractAddress";
import { AbiItem } from "web3-utils";

function Signup() {
  const ABI = Web3Bank.abi as AbiItem[];
  async function connectWallet() {
    try {
      if (typeof window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
        const balance = await contract.methods.getBankName().call();
        console.log(balance);
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <main className="grid grid-cols-1 justify-start place-content-center min-h-screen ">
      <h1 className="place-self-center text-2xl">Open Web3Bank Account</h1>
      <input
        className="input-ghost-secondary input mt-10 max-w-[15rem] md:max-w-[26rem] place-self-center"
        placeholder="Enter Your Wallet Address"
      />
      <input
        className="input-ghost-secondary input mt-10 max-w-[15rem] md:max-w-[26rem] place-self-center"
        placeholder="Enter Your Name"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center  max-w-[15rem] md:max-w-[26rem] gap-x-4 mt-3 place-self-center">
        <button className="btn btn-outline-warning" onClick={connectWallet}>
          Create Account
        </button>
        <Link href="/openaccount" className="btn btn-outline-error">
          Login
        </Link>
      </div>
    </main>
  );
}

export default Signup;
