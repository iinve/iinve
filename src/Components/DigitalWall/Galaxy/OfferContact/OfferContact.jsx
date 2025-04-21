import React from 'react'
import Style from './OfferContact.module.scss'

function OfferContact({data}) {
    const handleContactUs = () => {
        window.open(data?.whatsApp_1, '_self');
    }

    return (
        <div className={Style.main}>
            <div className={Style.container}>
                <p className={Style.text}>{data?.offer}</p>
                <button className={Style.button} onClick={handleContactUs}>Contact Us</button>
            </div>
        </div>
    )
}

export default OfferContact
