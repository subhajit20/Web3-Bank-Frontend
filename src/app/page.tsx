import Image from "next/image";

export default function Home() {
  const name = "Subhajit";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello Guys {name}</h1>
    </main>
  );
}
