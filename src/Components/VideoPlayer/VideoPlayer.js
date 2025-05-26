import { Button } from '@heroui/react';
import ProIcon from 'ProUI/Icons/icons';
import { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url, controls = false, loop = true }) => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-white/50">
      <ReactPlayer
        url={url}
        playing
        muted={isMuted}
        controls={controls}
        width="100%"
        height="100%"
        loop={loop}
      />
        <Button
          onPress={toggleMute}
          isIconOnly
          color='primary'
          variant='faded'
          className='rounded-full absolute bottom-3 right-3 !bg-white/50 p-2 border border-white'
          size='sm'
        >
          {!isMuted ? <ProIcon name={'FaVolumeMute'} size={22} /> : <ProIcon name={'FaVolumeUp'} size={22} />}
        </Button>
    </div>
  );
};

export default VideoPlayer;
