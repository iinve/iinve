import { ASSETS } from '@/lib/assets';
import Image from 'next/image';
import Style from './Avatar.module.scss';

const Avatar = ({data}) => {

  return (
    <div className={Style.section}>
      <div className={Style.profile}>
        <Image 
        width={280}
        height={200}
        alt='oneone'
        src={data?.profile_image || 'https://avatar.iran.liara.run/public/38'}/>
        
      </div>
      <div className={Style.content}>
        <span>{data?.greeting || "Hi"},</span>
        <h2> I am {data?.first_name || "yourname"}<span>.</span></h2>
        <span>{data?.bio || "Bio"}</span>
      </div>
    </div>
  )
}

export default Avatar
