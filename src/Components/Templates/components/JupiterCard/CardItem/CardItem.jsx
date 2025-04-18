import { ASSETS } from '@/lib/assets'
import ProIcon from '@/ProUI/Icons/icons'
import Image from 'next/image'
import Link from 'next/link'
import Style from './CardItem.module.scss'

const CardItem = ({data}) => {
    return (
           <Link href={data?.link}>
        <div className={Style.carditem}>
           <div className={Style.arrows}>
                <div className='w-[50px] h-[50px] overflow-hidden rounded-full'>
                    <Image
                        width={50}
                        height={50}
                        alt='oneone'
                        className='h-full object-cover'
                        src={data?.preview || ASSETS.placeholder.banner} />
                </div>
                <div className={Style.arrow}>
                   <ProIcon name={'CiLink'} size={20} color='#fff'/>
                </div>
            </div>
            <h4>{data.text}</h4>
        </div>
           </Link>
    )
}

export default CardItem
