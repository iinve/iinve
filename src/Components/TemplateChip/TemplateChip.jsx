import Link from 'next/link'
import ProIcon from '../../ProUI/Icons/icons'
import Style from './TemplateChip.module.scss'

const TemplateChip = () => {
  return (
    <div className={Style['template-chip']}> 
    <Link href="/templates">
      <span className={Style.span}>
        Claim your offer! <button className={Style.arrow} ><ProIcon name={'MdArrowOutward'} size={12}/></button>
      </span>
    </Link>
    </div>
  ) 
}

export default TemplateChip
