

import { Assets } from "assets/assets"
import Image from "next/image"
import Link from "next/link"

export const Logo = ({ width, height }) => {
    return <Link href='/' className="flex items-center"> <Image
        src={Assets.Logo.main}
        alt="Logo"
        width={width}
        height={height}
        priority
        quality={80}
        sizes="(max-width: 768px) 120px, 160px"
    /></Link>
}
