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


export const ImagePreview = ({ image, onRemove }) => {
  return <div className="relative inline-block mt-2">
    <img
      src={image}
      alt="Spotlight Preview"
      className="h-24 object-contain rounded border relative"
    />
    <ActionButton isIconOnly color='danger' className='absolute -top-2 -right-2' size='sm' onPress={() => onRemove()}>
      <ProIcon name='CiTrash' size={18} color='white' />
    </ActionButton>
  </div>
}