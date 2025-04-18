'use client'
// import ActionButton from '@/ProUI/ActionButton/ActionButton'
// import { Link } from '@heroui/react'
import AboutMe from '../components/AboutMe/AboutMe'
import Avatar from '../components/Avatar/Avatar'
// import GridSocialMedia from '../components/GridSocialMedia/GridSocialMedia'
import JupiterCard from '../components/JupiterCard/JupiterCard'
import PoweredBy from '../components/PoweredBy/PoweredBy'
import SocialMediaLinks from '../components/SocialMediaLinks/SocialMediaLinks'
import Style from './index.module.scss'

const Jupiter = ({data}) => {
    return (
        <div className={Style.main}>
            <div className={Style.blur}></div>
            <div className={Style.blur_two}></div>
            <div className={Style.blur_blue}></div>
            <div className={Style.wrapper}>
                <Avatar data={data}/>
                <AboutMe about={data?.about} showButton={data?.show_collaboration} connect={data?.connect_details}/>
                <div className='mb-8'>
                    <SocialMediaLinks data={data} isDarkBackground />
                </div>
                <JupiterCard data={data}/>
                
                {/* we can implement this later */}

                {/* <div className='mt-4 text-center'>
                {data?.socials?.map((social, idx)=> <GridSocialMedia key={idx} data={data?.instagram} /> )}
                </div> */}
            </div>
            <PoweredBy/>
        </div>
    )
}

export default Jupiter
