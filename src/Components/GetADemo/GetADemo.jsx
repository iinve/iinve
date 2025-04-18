'use client';
import { useToggleVisibility } from '@/utils/sheetUtils';
import ActionButton from '../../ProUI/ActionButton/ActionButton';
import GradientHeading from '../../ProUI/ProHeading/ProHeading';
import Style from './Contact.module.scss';

const GetADemo = () => {
  const { toggleSheetVisibility } = useToggleVisibility()
  const handleClickDemo = () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=918075952456&text=Hello%2C%0A%0AI+hope+this+message+finds+you+well.+I+am+interested+in+creating+a+wedding+invitation+website+for+my+upcoming+wedding.+Could+you+please+provide+me+with+more+details+about+your+services%2C+packages%2C+and+pricing%3F%0A%0AThank+you';
  };
  

    return (<div className={Style.contact_container}>
        <div className={Style.wrapper}>
            {/* <h2 className={`${Style.heading} heading`}>Book your demo <br /> viiew!</h2> */}
            <GradientHeading className={Style.heading}>Book your demo <br /> iinve!</GradientHeading>
            <span className={Style.content}>Schedule your IINVE demo and start designing heartfelt digital wedding invites that make every<br/> “You’re Invited” feel magical.</span>
            <div className={Style.messege}>
               <ActionButton className={Style.button} color="primary" size="lg" onClick={handleClickDemo}>Book a Demo</ActionButton>
            </div>
        </div>
    </div>
    )
}

export default GetADemo
