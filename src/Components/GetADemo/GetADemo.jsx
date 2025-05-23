'use client';

import { useToggleVisibility } from 'utils/sheetUtils';
import ActionButton from '../../ProUI/ActionButton/ActionButton';
import GradientHeading from '../../ProUI/ProHeading/ProHeading';
import Style from './Contact.module.scss';
import useWindowDimensions from 'utils/useWindowDimensions';
import { useWhatsAppMessage } from 'hooks/useWhatsAppMessage';

const GetADemo = () => {
  const { toggleSheetVisibility } = useToggleVisibility()
  const { isMobile } = useWindowDimensions()
  const {handleSendWhatsAppMessage} = useWhatsAppMessage()
  

    return (<div className={Style.contact_container}>
        <div className={Style.wrapper}>
            {/* <h2 className={`${Style.heading} heading`}>Book your demo <br /> viiew!</h2> */}
            <GradientHeading className={Style.heading}>Book your demo {!isMobile && <br />} <span>iinve!</span></GradientHeading>
            <span className={Style.content}>Whether you&lsquo;re preparing for your big day or building stronger customer connections —
            iinve is your digital partner.</span>
            <div className={Style.messege}>
               <ActionButton className={Style.button} color="primary" size="lg" onClick={()=>handleSendWhatsAppMessage('demo')}>Book a Demo</ActionButton>
            </div>
        </div>
    </div>
    )
}

export default GetADemo
