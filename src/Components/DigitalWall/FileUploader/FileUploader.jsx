import Image from 'next/image'
import ActionButton from 'ProUI/ActionButton/ActionButton'
import ProIcon from 'ProUI/Icons/icons'
import React from 'react'

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


export const ImagePreview = ({ image, onRemove}) => {
  return <div className="relative w-full md:w-1/2 mx-auto">
  <Image
    src={image}
    alt="Spotlight Preview"
    width={500}   // use actual or max width
    height={300}  // use actual height to preserve aspect ratio
    className="rounded border object-contain"
  />
  <ActionButton
    color="danger"
    className="absolute -top-2 -right-2 text-[8px] p-2 cursor-pointer"
    size="xs"
    onPress={onRemove}
  >
    Remove
  </ActionButton>
</div>
}