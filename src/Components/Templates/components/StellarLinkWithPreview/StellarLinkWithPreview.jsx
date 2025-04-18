import ProIcon from '@/ProUI/Icons/icons'
import Image from 'next/image'
import Link from 'next/link'
import Style from './StellerLinkWithPreview.module.scss'

const StellarLinkWithPreview = ({ data, color }) => {
  return (
    <div className={Style.StellarLinkWithPreview} style={{ '--color': data?.template_content_color }}>
      <Link href={data?.link} target='_blank'>

        {data?.preview ? <div className={Style.preview}>
          <Image src={data?.preview} height={40} width={40} alt={data.text} />
        </div> : <div className={Style.icon}><ProIcon name={'CiLink'} size={30} color={color || "#fff"} /> </div>}

        <div>
          <h2>{data?.text || "Link"}</h2>
          <p>{data?.description}</p>
        </div>
      </Link>
    </div>
  )
}

export default StellarLinkWithPreview