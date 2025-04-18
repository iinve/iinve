import { useState } from 'react';
import ActionButton from '@/ProUI/ActionButton/ActionButton';
import { ProSkeleton, Section } from '@/ProUI/Common/Common';
import { ProInput, ProUploader } from '@/ProUI/Form/Form';
import ProIcon from '@/ProUI/Icons/icons';
import Image from 'next/image';
import { handleImageCompression } from '@/utils/imageUtils';


const PortfolioLinksUploader = ({ formData, setFormData, handleAddLink, handleRemoveLink }) => {
  const [isCompressing, setIsCompressing] = useState(false);

  const handleImageUpload = async (imageFile, index) => {
    setIsCompressing(true);
    
    try {
      const compressedBase64 = await handleImageCompression(imageFile);
      const updatedLinks = [...formData.links];
      updatedLinks[index] = { ...updatedLinks[index], preview: compressedBase64 };
      setFormData({ ...formData, links: updatedLinks });
    } catch (error) {
      console.error("Image compression failed:", error);
    }

    setIsCompressing(false);
  };

  return (
    <>
      <div className='heading flex justify-between items-center mt-10 my-5'>
        <h2 className='md:text-lg font-semibold text-base'>Portfolio <span className='opacity-50'>(Add your important link, work etc)</span></h2>
      </div>

      {formData?.links?.map((link, index) => (
        <Section key={link.id} className="link-box my-4" onClose={() => handleRemoveLink(link.id)}>
          
          {/* Title Input */}
          <ProInput
            className="mb-2"
            type="text"
            placeholder="Title"
            variant="faded"
            color="default"
            value={link.text}
            onChange={(e) => {
              const updatedLinks = [...formData.links];
              updatedLinks[index] = { ...updatedLinks[index], text: e.target.value };
              setFormData({ ...formData, links: updatedLinks });
            }}
          />

          {/* Link Input */}
          <ProInput
            className="mb-2"
            type="url"
            placeholder="Link"
            variant="faded"
            color="default"
            value={link.link}
            onChange={(e) => {
              const updatedLinks = [...formData.links];
              updatedLinks[index] = { ...updatedLinks[index], link: e.target.value };
              setFormData({ ...formData, links: updatedLinks });
            }}
          />

          {/* Image Uploader with Compression & Shimmer */}
          {isCompressing ? (
            <div className='w-full h-[150px] mb-4'>
              <ProSkeleton height='150' />
            </div>
          ) : !formData?.links[index]?.preview ? (
            <ProUploader
              className="mb-2"
              action={(e) => e.preventDefault()}
              placeholder="Click or Drag image to upload Preview"
              savePreviews={(imageFile) => handleImageUpload(imageFile, index)}
              accept="image/png, image/jpeg, image/jpg"
            />
          ) : (
            <Section
              onClose={() => {
                const updatedLinks = [...formData.links];
                updatedLinks[index] = { ...updatedLinks[index], preview: null };
                setFormData({ ...formData, links: updatedLinks });
              }}
              className='mb-2'
            >
              <div className="w-full h-[150px] object-cover my-4 overflow-hidden rounded-lg border border-[#333] border-dashed">
                <Image
                  src={formData?.links[index]?.preview}
                  width={100}
                  height={150}
                  alt="Preview"
                  className="w-full object-cover rounded-lg"
                />
              </div>
            </Section>
          )}

        </Section>
      ))}

      <div className='my-8 w-full flex justify-center'>
        <ActionButton variant="bordered" onClick={handleAddLink}>
          <ProIcon name={'GoPlus'} size={18} color='#fff' /> Add link
        </ActionButton>
      </div>
    </>
  );
};

export default PortfolioLinksUploader;
