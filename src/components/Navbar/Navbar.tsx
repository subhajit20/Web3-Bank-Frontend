"use client";
import React, { useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Button, Drawer, Radio, Space } from "antd";

interface NavInfo {
  bankName: string;
}

function Navbar({ bankName }: NavInfo) {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };
  //   const { title } = props;
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
          <a className="navbar-item hidden md:block">
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
        className="bg-blend-darken"
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
          >
            Login
          </Link>
          <Link
            className="menu-item text-lg font-medium text-black hover:text-white"
            href="/openaccount"
          >
            Open Account
          </Link>
        </ul>

        <div className="block md:hidden">
          <ConnectButton />
        </div>
      </Drawer>
    </nav>
  );
}

export default Navbar;