"use client";
import React from "react";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

function Login() {
  return (
    <main className="grid grid-cols-1 justify-start place-content-center min-h-screen ">
      <h1 className="place-self-center text-2xl">Login</h1>
      <input
        className="input-ghost-secondary input mt-10 max-w-[26rem] place-self-center"
        placeholder="Enter Your Wallet Address"
      />
      <input
        className="input-ghost-secondary input mt-10 max-w-[26rem] place-self-center"
        placeholder="Enter Your Name"
      />
      <div className="grid grid-cols-2 justify-center max-w-[26rem] gap-x-4 mt-3 place-self-center">
        <button className="btn btn-outline-warning">Login</button>
        <Link href="/openaccount" className="btn btn-outline-error">
          Create New Account
        </Link>
      </div>
    </main>
  );
}

export default Login;
