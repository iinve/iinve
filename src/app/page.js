import StarBackground from "@/Components/StarBackground";
import { Assets } from "@/assets/assets";
import Image from "next/image";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <NextUIProvider>
      <Toaster />
      <main className="no-data">
        <Image src={Assets?.Logo} alt="Logo" />
        <StarBackground />
        <p>Designing Magic for You!</p>
        <span>Create your own invitatio</span>
        <small>contu</small>
      </main>
    </NextUIProvider>
  );
}
