"use client";
import { useAccountModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Home() {
  const { address, isConnected } = useAccount();
  const name = "Subhajit";

  const getAccount = () => {
    console.log(address);
    // console.log(data);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Guys {name}</h1>
      <button className="btn btn-outline-primary" onClick={getAccount}>
        Default
      </button>
    </main>
  );
}
