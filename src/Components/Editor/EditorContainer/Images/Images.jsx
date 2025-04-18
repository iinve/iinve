import React from 'react'
import Style from './Images.module.scss'
import Image from 'next/image'
import { Assets } from '@/assets/assets'


const Images = () => {
    return (
        <div className={Style.image_container}>
            <div className={Style.Images}>
                {Assets.dash_images.map((item, idx) => (
                    <Image
                        key={idx}
                        src={item}
                        height={130}
                        width={130}
                        alt=''
                        className={Style.items}
                    />
                ))}
            </div>
            <button className={Style.add_images}>
                Add Image
            </button>
        </div>
    )
}

export default Images
