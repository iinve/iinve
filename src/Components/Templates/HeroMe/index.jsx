import AboutMe from '../components/AboutMe/AboutMe'
// import GridSocialMedia from '../components/GridSocialMedia/GridSocialMedia'
import HeroSpotlight from '../components/HeroSpotlight/HeroSpotlight'
import ImageMasonry from '../components/ImageMasonry/ImageMasonry'
import JupiterCard from '../components/JupiterCard/JupiterCard'
import PoweredBy from '../components/PoweredBy/PoweredBy'

const HeroMe = ({ data }) => {
  return (
    <div style={{ background: "#000" }}>
      <HeroSpotlight data={data} />
      <AboutMe about={data?.about} showButton={data?.show_collaboration} connect={data?.connect_details}/>
      {/* {data?.social_links?.map((social, idx) => <GridSocialMedia key={idx} data={data?.instagram} />)} */}
      <div className='p-4 mb-4'>
        <JupiterCard data={data} />
      </div>
      <ImageMasonry data={data?.gallery || []} />
      <PoweredBy />
    </div>
  )
}

export default HeroMe