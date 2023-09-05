"use client";
import React, { useEffect, useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Drawer } from "antd";
import Web3 from "web3";
import Web3Bank from "@/assets/abi/Web3Bank.json";
import { CONTRACT_ADDRESS } from "@/assets/constants/ContractAddress";
import { AbiItem } from "web3-utils";
import { useAccount } from "wagmi";
// import { useSelector } from "react-redux";

interface NavInfo {
  bankName: string;
}

const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "msg",
        type: "string",
      },
    ],
    name: "ok",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "bankOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hello",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
function Navbar({ bankName }: NavInfo) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
  const ABI = Web3Bank.abi as AbiItem[];
  const accounts = useAccount();
  // const data = useSelector((state) => state);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  const callHello = async () => {
    const web3 = new Web3(window.ethereum);
    const myContract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    const account = await web3.eth.getAccounts();
    console.log(account[0]);
    const data = await myContract.methods
      .getAccountByAddress(account[0])
      .call();
    console.log(data);
  };
  //   const { title } = props;
  useEffect(() => {
    console.log(accounts.address);
    console.log(accounts.isConnected);
    // console.log(data);
  }, [accounts]);

  return (
    <nav className="navbar-sticky">
      <div className="navbar">
        <div className="navbar-start">
          <Link href={"/"} className="navbar-item" onClick={showDrawer}>
            Open
          </Link>
          <Link href={"/"} className="navbar-item w-[10rem]">
            {bankName}
          </Link>
        </div>
        <div className="navbar-end ">
          <a className="navbar-item">
            <ConnectButton
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
            />
          </a>
        </div>
      </div>
      <Drawer
        title={
          <>
            <button className="btn btn-outline-primary" onClick={onClose}>
              Close
            </button>
          </>
        }
        className="bg-slate-600"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <ul className="menu-items">
          <Link
            className="menu-item text-lg font-medium text-black hover:text-white"
            href="/login"
            onClick={onClose}
          >
            Login
          </Link>
          <Link
            className="menu-item text-lg font-medium text-black hover:text-white"
            href="/openaccount"
            onClick={onClose}
          >
            Open Account
          </Link>
          <Link
            className="menu-item text-lg font-medium text-black hover:text-white"
            href="/account"
            onClick={onClose}
          >
            Account
          </Link>
        </ul>
      </Drawer>
    </nav>
  );
}

export default Navbar;
