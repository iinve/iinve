import Image from 'next/image'
import ActionButton from 'ProUI/ActionButton/ActionButton'
import ProIcon from 'ProUI/Icons/icons'
import React, { useEffect, useState } from 'react'
import { getImagePreviewUrl } from 'utils/imageUtils'

const FileUploader = ({ onUpload, refs, placeholder }) => {
  return (
    <div className='w-full h-24 border border-dashed rounded relative'>
      <span className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>{placeholder}</span>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => onUpload(e)}
        ref={el => refs.current.spotlight = el}
        className="mb-2 w-full h-24 border rounded opacity-0"
      />
    </div>
  )
}

export default FileUploader


export const ImagePreview = ({ image, onRemove }) => {
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    const loadImageUrl = async () => {
      const url = await getImagePreviewUrl(image);
      setPreviewUrl(url);
    };

    if (image) {
      loadImageUrl();
    }
  }, [image]);

  return (
    <div className="relative w-full mx-auto">
      {previewUrl && (
        <Image
          src={previewUrl}
          alt="Spotlight Preview"
          width={500}
          height={100}
          className="w-full h-[150px] rounded border object-cover"
        />
      )}
      <ActionButton
        color="danger"
        className="absolute -top-2 -left-2 text-[8px] p-2 cursor-pointer"
        size="xs"
        onPress={onRemove}
        isIconOnly
      >
       <ProIcon name='IoMdClose' color='#fff' size={12} />
      </ActionButton>
    </div>
  );
};