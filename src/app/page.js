import StarBackground from "@/Components/StarBackground";
import { Assets } from "@/assets/assets";
import Image from "next/image";
import "./globals.css";
import { Button, NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";

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
                "https://api.whatsapp.com/send/?phone=%2B917306122521&text=Hello%2C%0A%0AI+hope+this+message+finds+you+well.+I+am+interested+in+creating+a+wedding+invitation+website+for+my+upcoming+wedding.+Could+you+please+provide+me+with+more+details+about+your+services%2C+packages%2C+and+pricing%3F%0A%0AThank+you&type=phone_number&app_absent=0"
              }
              target="_blankk"
            >
              whatsapp
            </a>
          </Button>
          <Button color="primary" variant="flat" className="ms-2">
            <a href={"https://www.instagram.com/hi.iinve/"} target="_blankk">
              instagram
            </a>
          </Button>
        </div>
      </main>
    </NextUIProvider>
  );
}
