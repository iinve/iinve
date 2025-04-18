import ProIcon from '@/ProUI/Icons/icons';
import Link from 'next/link';
import Style from './SocialMediaLinks.module.scss';

const SocialMediaLinks = ({ data, isDarkBackground = false }) => {
  return (
    <div className={Style.SocialMediaLinks}>
      {data?.social_links?.map((social, idx) => (
        <Link key={idx} href={social?.url || "-1"} target='_blank'>
          <ProIcon name={social?.platform || "FaInstagram"} size={30} color={isDarkBackground  && "#fff" || data?.template_content_color } />
        </Link>
      ))}
    </div>
  );
}

export default SocialMediaLinks;
