'use client'
import Image from 'next/image';
import { useState } from 'react';
import { default as ProIcon } from '../../ProUI/Icons/icons';
import Style from './TemplateCard.module.scss';
import { ProChip } from 'ProUI/Common/Common';
import useWindowDimensions from 'utils/useWindowDimensions';


const TemplateCard = ({ template, selection, isSelected, onSelect }) => {
    const { image, name, price } = template;
    const { isMobile } = useWindowDimensions();
    const [isLoading, setIsLoading] = useState(true);

    const handleClickTemplateCard = () => {
        if (!selection) return;
        onSelect?.(); // Ensure onSelect exists before calling
    };

    return (
        <div 
            className={`${Style.template_card} ${isSelected && Style.selected}`} 
            onClick={handleClickTemplateCard}
        >
            {/* Top Selling Badge */}
            {selection && template?.isTopSelling && (
                <div className={Style.price}>
                <ProChip color="danger" variant="faded">🔥 Top Selling</ProChip>
           </div>
            )}
            

            {/* Template Image */}
            <div className={Style.image_wrapper}>
                {isLoading && <div className={Style.loading}>Loading...</div>} {/* Show while loading */}
                <Image
                    src={image || '/fallback.png'} // Ensure fallback image
                    height={100}
                    width={120}
                    alt="template"
                    onLoad={() => setIsLoading(false)}
                    onError={() => setIsLoading(false)}
                    className={`${isLoading ? Style.hidden : "block"}`} // Hide image until loaded
                    priority
                    blurDataURL={image || '/fallback.png'} // Ensure valid blurDataURL
                />
            </div>

            {/* Template Details */}
            <div className={Style.name_box}>
                <div className={Style.devices}>
                    {['RxMobile', 'BsTablet', 'RxDesktop'].map((device, idx) => (
                        <ProIcon name={device} size={isMobile ? 15 : 20} key={`icon-${idx}`} color="#fff" />
                    ))}
                </div>
                <h3 className='text-center text-sm md:text-md '>{name}</h3>
                {selection && (
                    <div className={Style.seclection}>
                        {isSelected && <ProIcon name="IoMdCheckmark" size={18} color="#fff" />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TemplateCard;
