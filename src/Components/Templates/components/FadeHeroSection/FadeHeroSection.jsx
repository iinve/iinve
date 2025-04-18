import Image from 'next/image'
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks'
import Style from './FadeHeroSection.module.scss'

const FadeHeroSection = ({data, color}) => {
  return (
    <div className={Style.FadeHeroSection}>
      <div className={Style.spotlight_image}>
        <Image src={data?.spotlight_image || "https://rb.gy/3me098"} width={400} height={400} alt='Spotlight Image' />
      </div>
      <div className={Style.fader} style={{ '--color': color?.theme }}></div>
      <div className={Style.namebox}>
        <h2>{data?.greeting || 'Hi'} Im {data?.first_name || "yourname"}</h2>
        <p>{data?.bio || "Bio"}</p>
        <SocialMediaLinks data={data}/>
      </div>
    </div>
  )
}

export default FadeHeroSection