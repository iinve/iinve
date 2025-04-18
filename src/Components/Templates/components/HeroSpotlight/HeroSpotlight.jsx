
import { ASSETS } from '@/lib/assets';
import Image from 'next/image';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import Style from './HeroSpotlight.module.scss';
const HeroSpotlight = ({ data }) => {
  // const { spotlight_image, greeting, first_name, bio } = data;
  return (
    <div className={Style.HeroSpotlight}>
      <div className='overview-hidden'>
        <Image src={data?.spotlight_image || ASSETS.dash_avathar} fill alt={data?.first_name} className='object-cover' />
      </div>
      <div className={Style.content}>
        <span>{data?.greeting || "Hi"}, I&apos;m</span>
        <h2>{data?.first_name || "yourname"}</h2>
        <span>{data?.bio || "Bio"}</span>
        <SocialMediaLinks data={data} isDarkBackground/>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default HeroSpotlight