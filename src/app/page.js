import StarBackground from "@/Components/StarBackground";
import { Assets } from "@/assets/assets";
import Image from "next/image";
import "./globals.css";
import { Button, NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";
import Link from "next/link";

export default function Home() {
  return (
    <NextUIProvider>
      <Toaster />
      <main className="no-data">
        <Image src={Assets?.Logo} alt="Logo" />
        <StarBackground />
        <p>Designing Magic for You!</p>
        <span>for create your own invitation</span>
        <div className="flex items-center justify-centern gap-x-px">
          <Button color="primary" variant="flat">
            <a
              href={
                "https://wa.me/+917306122521?text=Hello%2C%0A%0AI%20hope%20this%20message%20finds%20you%20well.%20I%20am%20interested%20in%20creating%20a%20wedding%20invitation%20website%20for%20my%20upcoming%20wedding.%20Could%20you%20please%20provide%20me%20with%20more%20details%20about%20your%20services%2C%20packages%2C%20and%20pricing%3F%0A%0AThank%20you%2C%0A%5BYour%20Name%5D"
              }
              target="_blankk"
            >
              instagram
            </a>
            whatsapp
          </Button>
          <Button color="primary" variant="flat">
            <a href={"https://www.instagram.com/hi.iinve/"} target="_blankk">
              instagram
            </a>
          </Button>
        </div>
      </main>
    </NextUIProvider>
  );
}
