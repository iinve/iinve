import { ProAvatar } from '@/ProUI/Common/Common';
import ProIcon from '@/ProUI/Icons/icons';
import { getRatingStars } from '@/utils/shareUtils';
import Link from 'next/link';
import Style from './Testimonial.module.scss';



const TestimonialCard = ({data}) => {
  return (
    <div className={Style.card}>
      <p dangerouslySetInnerHTML={{ __html: data.message}}></p>
      <div className='flex items-center justify-between'>
        <div className="flex items-center">
          <div className={Style.avatar}>
            <ProAvatar src={data.avatar}  name={data.name?.split('')[0]}/>
          </div>
          <div>
            <h4 className='font-semibold'>{data.name}</h4>
            <span className='text-sm mb-2 block text-gray-400'>{data.designation}</span>
            {getRatingStars(data.rating)} 
          </div>
        </div>
       {data.instagram && <Link href={data.instagram}>
        <ProIcon name={'FaInstagram'} size={26} color='#fff'/>
        </Link>}
       {data.linkedin && <Link href={data.linkedin}>
        <ProIcon name={'FaLinkedinIn'} size={26} color='#fff'/>
        </Link>}
      </div>
      <div className='absolute -top-[20px] right-0 z-[999]'>
      <ProIcon name={'PiQuotesDuotone'} size={50} color='#485ddc'/>
      </div>
    </div>
  );
};

export default TestimonialCard;
