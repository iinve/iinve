import React from 'react'
import Style from './OfferContact.module.scss'

function OfferContact() {
    return (
        <div className={Style.main}>
            <div className={Style.container}>
                <p className={Style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <button className={Style.button}>Contact Us</button>
            </div>
        </div>
    )
}

export default OfferContact
