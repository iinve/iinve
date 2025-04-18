import React from 'react'
import Image from 'next/image'
import Style from './Avathar.module.scss'
import { Assets } from '@/assets/assets'

const Avathar = () => {
    return (
        <div className={Style.img_avathar_container}>
            <Image
                className={Style.img_avathar}
                src={Assets.dash_avathar}
                height={250}
                width={250}
                alt='dash_avathar'
            />
            <div className={Style.img_cam}>
                <Image
                    src={Assets.dash_avathar_cam}
                    height={25}
                    width={25}
                    alt='dash_avathar_camr'
                />
            </div>
        </div>
    )
}

export default Avathar
