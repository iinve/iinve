
import { ProSkeleton } from 'ProUI/Common/Common'
import React from 'react'

const EditorLoader = () => {
  return (
    <div className='pt-[100px]'>
      <div className='w-full h-[40px] mb-4'>
        <ProSkeleton height='40' />
      </div>
      <div className='w-full h-[40px] mb-4'>
        <ProSkeleton height='40' />
      </div>
      <div className='w-full h-[100px] mb-4'>
        <ProSkeleton height='100' />
      </div>
      <div className='w-full h-[40px] mb-4'>
        <ProSkeleton height='40' />
      </div>
      <div className="w-full h-[40px] mb-4 grid grid-cols-[30%_auto] gap-4">
        <ProSkeleton height="40" />
        <ProSkeleton height="40" />
      </div>
      <div className="w-full h-[40px] mb-4 grid grid-cols-[30%_auto] gap-4">
        <ProSkeleton height="40" />
        <ProSkeleton height="40" />
    </div>
      <div className='w-full h-[80px] mb-4'>
        <div className='grid grid-cols-4 gap-4'>
          <ProSkeleton height='80' />
          <ProSkeleton height='80' />
          <ProSkeleton height='80' />
          <ProSkeleton height='80' />
          <ProSkeleton height='80' />
          <ProSkeleton height='80' />
          <ProSkeleton height='80' />
          <ProSkeleton height='80' />
        </div>
      </div>
    </div>
  )
}

export default EditorLoader