import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { Providers } from "./Providers";
import Store from "@/services/store/Store";
import { Provider } from "react-redux";

const inter = Poppins({ weight: "300", preload: false });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* <Provider store={Store()}> */}
          <Navbar bankName={"Web3 Bank"} />
          <main>{children}</main>
          {/* </Provider> */}
        </Providers>
      </body>
    </html>
  );
}
