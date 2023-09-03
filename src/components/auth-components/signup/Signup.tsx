"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import Link from "next/link";
import Web3 from "web3";
import Web3Bank from "@/assets/abi/Web3Bank.json";
import { CONTRACT_ADDRESS } from "@/assets/constants/ContractAddress";
import { AbiItem, isAddress } from "web3-utils";
import Spinner from "@/components/ui/spinner/Spinner";
import SuccessAlert from "@/components/ui/alert/SuccessAlert";
import FailAlert from "@/components/ui/alert/FailAlert";

export default function Signup() {
  const [inputs, setInputs] = useState({
    metamaskAddress: "",
    userName: "",
  });
  const [loading, setLoading] = useState(false);
  const [alertMsg, setAlertMsg] = useState(<></>);
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

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    if (e.target.name === "metamaskAddress") {
      setInputs((prev) => ({ ...prev, metamaskAddress: e.target.value }));
    } else if (e.target.name === "userName") {
      setInputs((prev) => ({ ...prev, userName: e.target.value }));
    }
  };

  /**
   * @
   */
  const openingNewAccount = async () => {
    setLoading(true);
    try {
      if (inputs.userName === "") {
        throw "Username is invalid";
      }
      if (!isAddress(inputs.metamaskAddress)) {
        throw "Address is not valid";
      }

      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

      const account = await contract.methods
        .openAccount(inputs.metamaskAddress, inputs.userName)
        .send({
          from: inputs.metamaskAddress,
          value: web3.utils.toWei("30", "wei"),
        });

      console.log(account);
      setLoading(false);
      setAlertMsg(<SuccessAlert msg={"Successfull"} />);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setAlertMsg(<FailAlert msg={"Failed"} />);
    }

    setLoading(false);
    setTimeout(() => {
      setAlertMsg(<></>);
    }, 3000);
  };

  useEffect(() => {
    console.log(ABI);
    // console.log(inputs);
  }, [ABI]);
  return (
    <main className="grid grid-cols-1 justify-start place-content-center min-h-screen ">
      <h1 className="place-self-center text-2xl">Open Web3Bank Account</h1>
      <div className="justify-self-center">{alertMsg ? alertMsg : ""}</div>
      <input
        name="metamaskAddress"
        onChange={(e) => handleInput(e)}
        className="input-ghost-secondary input mt-10 max-w-[15rem] md:max-w-[26rem] place-self-center"
        placeholder="Enter Your Wallet Address"
      />
      <input
        name="userName"
        onChange={(e) => handleInput(e)}
        className="input-ghost-secondary input mt-10 max-w-[15rem] md:max-w-[26rem] place-self-center"
        placeholder="Enter Your Name"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center  max-w-[15rem] md:max-w-[26rem] gap-x-4 mt-3 place-self-center">
        {loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <button
              className="btn btn-outline-warning"
              onClick={openingNewAccount}
            >
              Create Account
            </button>
            <Link href="/openaccount" className="btn btn-outline-error">
              Login
            </Link>
          </React.Fragment>
        )}
      </div>
    </main>
  );
}
