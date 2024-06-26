import StarBackground from "@/Components/StarBackground";
import { Assets } from "@/assets/assets";
import Image from "next/image";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="no-data">
        <Image src={Assets?.Logo} alt="Logo" />
        <StarBackground />
        <p>Designing Magic for You!</p>
      </main>
    </NextUIProvider>
  );
}
