import { useState, useEffect, useRef } from 'react';
import { ProSkeleton, Section } from '@/ProUI/Common/Common';
import { ProUploader } from '@/ProUI/Form/Form';
import ReactCrop, { makeAspectCrop, centerCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";
import ActionButton from '@/ProUI/ActionButton/ActionButton';
import { handleImageCompression } from '@/utils/imageUtils';

const BannerUploader = ({ formData, setFormData }) => {
  const [cropImageURL, setCropImageURL] = useState(null);
  const [open, setOpen] = useState(false);
  const [crop, setCrop] = useState(null);
  const imageRef = useRef(null);
  const [isCompressing, setIsCompressing] = useState(false)


  useEffect(() => {
    return () => cropImageURL && URL.revokeObjectURL(cropImageURL);
  }, [cropImageURL]);

  const handleImageUpload = (_, file) => {
    setCropImageURL(URL.createObjectURL(file));
    setOpen(true);
  };

  const onImageLoad = (e) => {
    const { naturalWidth: width, naturalHeight: height } = e.currentTarget;

    // Ensure the crop fits within the image
    const newCrop = makeAspectCrop(
      {
        unit: '%', // Percent-based crop
        width: 80, // 80% of the image width
      },
      16 / 9, // Aspect ratio
      width,
      height
    );

    // Center the crop within the image
    setCrop(centerCrop(newCrop, width, height));
  };

  const getCroppedImage = async () => {
    if (!imageRef.current || !crop || !crop.width || !crop.height) return;

    const canvas = document.createElement('canvas');
    const img = imageRef.current;
    const scaleX = img.naturalWidth / img.width;
    const scaleY = img.naturalHeight / img.height;

    canvas.width = crop.width * scaleX;
    canvas.height = crop.height * scaleY;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      img,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const base64Image = canvas.toDataURL('image/jpeg'); // Convert cropped image to Base64

    // Compress the cropped image before saving
    setIsCompressing(true)
    const compressedBase64 = await handleImageCompression(base64Image);

    if (compressedBase64) {
      setFormData({ ...formData, cover_photo: compressedBase64 });
      setIsCompressing(false)
    }

    setOpen(false);
  };

  return (
    <div>
      {isCompressing ? <div className='w-full h-[150px] mb-4'>
        <ProSkeleton height='150' />
      </div> : formData?.cover_photo ? (
        <Section onClose={() => setFormData({ ...formData, cover_photo: null })} className='mb-4'>
          <div className="w-full h-[150px] overflow-hidden rounded-lg border border-[#333] border-dashed">
            <img src={formData.cover_photo} alt="Cover" className="w-full h-full object-cover rounded-lg" />
          </div>
        </Section>
      ) : (
        <ProUploader
          className='mb-2'
          placeholder="Click or Drag image to upload banner"
          savePreviews={handleImageUpload}
          accept="image/png, image/jpeg, image/jpg"
        />
      )}

      <Modal isOpen={open} onClose={() => setOpen(false)} size='lg'>
        <ModalContent>
          <ModalHeader>Crop Image</ModalHeader>
          <ModalBody className='flex justify-center'>
            {cropImageURL && (
              <ReactCrop
                crop={crop}
                onChange={(newCrop) => setCrop(newCrop)}
                aspect={16 / 9}
              >
                <img
                  ref={imageRef}
                  src={cropImageURL}
                  alt="Crop Preview"
                  onLoad={onImageLoad}
                  className="w-full max-w-[500px] h-auto object-contain"
                />
              </ReactCrop>
            )}
          </ModalBody>
          <ModalFooter>
            <ActionButton onPress={() => setOpen(false)}>Cancel</ActionButton>
            <ActionButton onPress={getCroppedImage} color='primary'>Save Cover Photo</ActionButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BannerUploader;
