
import { Assets } from "@/assets/assets"
import Image from "next/image"
import Link from "next/link"

export const Logo = ({ width, height }) => {
    return <Link href='/' className="flex items-center"> <Image src={Assets.Logo.light} width={width} height={height} alt="Logo" priority sizes="(min-width: 100px) 50vw, 100vw" /></Link>
}
