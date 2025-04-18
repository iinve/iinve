import { useState } from 'react';
import { ProSkeleton, ProSwitch, Section } from '@/ProUI/Common/Common';
import { ProUploader } from '@/ProUI/Form/Form';
import useWindowDimensions from '@/utils/useWindowDimensions';
import Image from 'next/image';
import { handleImageCompression } from '@/utils/imageUtils';

const UserImageUploader = ({ formData, setFormData, handleRemoveUploadedImage, enableGallery, handleEnableGallery }) => {
  const { width } = useWindowDimensions();
  const [isCompressing, setIsCompressing] = useState(false);

  return (
    <>
      <div className='heading flex justify-between items-center mt-10 my-5'>
        <h2 className='md:text-lg font-semibold text-base'>
          Gallery <span className='opacity-50'>(Add your favorite images)</span>
        </h2>
        <ProSwitch onChange={handleEnableGallery} isSelected={enableGallery}>
          {width > 560 ? (enableGallery ? 'Disable Gallery' : 'Enable Gallery') : ''}
        </ProSwitch>
      </div>

      {enableGallery && (
        <>
          <ProUploader
            className='mb-2'
            action={'#'}
            multiple
            fileList={[]}
            renderFile={() => null}
            onRemove={(file) => {
              setFormData({ ...formData, gallery: formData?.gallery?.filter((item) => item?.url !== file?.url) });
            }}
            onUpload={async (image) => {
              setIsCompressing(true);

              try {
                const compressedImage = await handleImageCompression(image);
                if (compressedImage) {
                  const formattedImage = {
                    id: (formData?.gallery?.length || 0) + 1,
                    url: compressedImage,
                  };

                  setFormData((prev) => ({
                    ...prev,
                    gallery: [...(prev.gallery || []), formattedImage],
                  }));
                }
              } catch (error) {
                console.error("Image compression failed:", error);
              } finally {
                setIsCompressing(false);
              }
            }}
            placeholder="Click or Drag images to upload"
            accept="image/png, image/jpeg, image/jpg"
          />

          {isCompressing ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full mb-4">
              <ProSkeleton height="100" />
              <ProSkeleton height="100" />
              <ProSkeleton height="100" />
              <ProSkeleton height="100" />
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-6">
              {formData?.gallery?.map((image, idx) => (
                <div key={idx} className="w-full h-auto flex items-center justify-center relative">
                  <Section onClose={() => handleRemoveUploadedImage(image)}>
                    <Image
                      src={image.url}
                      width={200}
                      height={200}
                      alt="Image"
                      className="w-[200px] h-[100px] object-cover rounded-lg"
                    />
                  </Section>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default UserImageUploader;
