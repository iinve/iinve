import React from 'react'
import Image from 'next/image'
import { ASSETS } from '@/lib/assets'
import Style from './Avathar.module.scss'

const Avathar = () => {
    return (
        <div className={Style.img_avathar_container}>
            <Image
                className={Style.img_avathar}
                src={ASSETS.dash_avathar}
                height={250}
                width={250}
                alt='dash_avathar'
            />
            <div className={Style.img_cam}>
                <Image
                    src={ASSETS.dash_avathar_cam}
                    height={25}
                    width={25}
                    alt='dash_avathar_camr'
                />
            </div>
        </div>
    )
}

export default Avathar
