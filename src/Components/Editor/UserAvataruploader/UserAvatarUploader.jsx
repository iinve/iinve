

import Image from "next/image";
import Style from "./UserAvatarUploader.module.scss";
import { handleImageCompression } from "utils/imageUtils";
import { useState } from "react";
import { ProSkeleton, Section } from "ProUI/Common/Common";
import { ProAvatarUploader } from "ProUI/Form/Form";


const UserAvatarUploader = ({ formData, handleAvatarUpload, setFormData }) => {
  const [isCompressing, setIsCompressing] = useState(false)
  const handleUpload = async (image) => {
    setIsCompressing(true)
    const compressedBase64 = await handleImageCompression(image); // Compress the image
    if (compressedBase64) {
      setFormData({ ...formData, spotlight_image: compressedBase64, profile_image: compressedBase64 });
      handleAvatarUpload(compressedBase64);
      setIsCompressing(false)

    }
  };
  return (
    <div className="flex justify-center mb-4 items-center max-w-[150px] mx-auto mb-6">
      {isCompressing ? <div className='w-full h-[150px] mb-4'>
              <ProSkeleton height='150' />
            </div> :formData?.spotlight_image ? (
        <Section onClose={() => setFormData({ ...formData, spotlight_image: null })}>
          <Image
            src={formData.spotlight_image}
            className="w-[150px] h-[150px] object-cover rounded-2xl"
            alt="Avatar"
            width={150}
            height={150}
          />
        </Section>
      ) : (
        <div className={Style.avatar}>
          <ProAvatarUploader
            action={null}
            onUpload={handleUpload} // Use the new function
            accept="image/png, image/jpeg, image/jpg"
          />
          <h5>Upload your profile picture</h5>
        </div>
      ) }
    </div>
  );
};

export default UserAvatarUploader;
