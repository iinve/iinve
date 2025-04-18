import { useRouter } from 'next/navigation'
import ActionButton from '../../ProUI/ActionButton/ActionButton'

const PreviewFooter = ({ handleConfirm }) => {
  const router = useRouter()
  return (
    <div className='flex justify-center items-center bg-zinc-700 py-4 px-10 fixed bottom-0 w-full z-50'>
      <ActionButton size='lg' className='bg-white text-black' onClick={()=>router.back()}>Choose another</ActionButton>
      <ActionButton size='lg' color='primary' className='ml-4' onClick={handleConfirm}>Make it mine</ActionButton>
    </div>
  )
}

export default PreviewFooter