'use client'
import ProHeading from '@/ProUI/ProHeading/ProHeading'
import AccordionContainer from '../../ProUI/Accordion/Accordion'
import ProIcon from '../../ProUI/Icons/icons'
import InfoChip from '../InfoChip/InfoChip'
import Style from './FAQs.module.scss'

const FAQs = () => {
  return (
    <div id='faq' className={Style.faq_container}>
      <div className='container mx-auto'>
      <div className={Style.faq}>
        <div className={Style.head}>
          <InfoChip icon={<ProIcon name='LuBadgeHelp' size={18} color='#fff' />} name={"FAQs"} className={"chip"} isLeft/>
          <ProHeading>All You Need to Know,<br/> at a Glance!</ProHeading>
        </div>
        <div className={Style.accordion}>
          <AccordionContainer />
        </div>
      </div>
      {/* <span className={Style.help_center}>
        <small className={Style.help}>Still have more questions? Contact our</small> <Link href={"/contact"}>help center.</Link>
      </span> */}
      </div>
    </div>
  )
}

export default FAQs
