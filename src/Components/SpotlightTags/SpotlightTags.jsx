import { Assets } from 'assets/assets';
import Image from 'next/image';

const SpotlightTags = () => {
 
  return (
    <div className='my-6 w-full relative h-[200px]'>
      <Image
        src={Assets?.tags.digital_wall}
        alt="Spotlight"
        width={160}
        height={200}
        className='absolute bottom-0 -right-2 animate-float'
      />
      <Image
        src={Assets?.tags.invitation}
        alt="Spotlight"
        width={260}
        height={200}
        className='animate-floatSlow -m-[10px] '
      />
    </div>
  );
};

export default SpotlightTags;
