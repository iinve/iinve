
import { Assets } from '@/assets/assets'
import ActionButton from '@/ProUI/ActionButton/ActionButton'
import { ProSkeleton, ProSnippet } from '@/ProUI/Common/Common'
import ProIcon from '@/ProUI/Icons/icons'
import { Sheet, SheetBody, SheetHeader } from '@/ProUI/Sheet/Sheet'
import shareUtils from '@/utils/shareUtils'
import { Card, CardFooter } from '@heroui/react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import Image from 'next/image'
import Link from 'next/link'


function PaymentSuccess(props) {
  const {savedLastUserData } = props;
  
  const handleShare = async () => {
    const success = await shareUtils.shareContent({
      title: `Hello \n`,
      text: `I’ve built my personal brand on viiew.me—take a look and let’s connect! \n`,
      url: `https://viiew.me/${savedLastUserData?.custom_username}`,
    });
  
    if (!success) {
      addToast({
        title: "Opps!",
        description: "Sharing failed or not supported on this device.",
        variant: 'flat',
        color: "warning",
        size: "md"
      })
    }
  };
  return (
    <>
      <SheetHeader>
        <h2 className='text-2xl text-center'>Wow!, You’re All Set! 🚀</h2>
      </SheetHeader>
      <SheetBody>
        <div className='w-full h-auto relative pb-8 flex justify-center'>
          {/* <DotLottieReact
            src="https://lottie.host/c1eca2cb-905a-4b20-80f1-dcebdc5c63c8/ps2y4ePLlY.lottie"
            loop
            autoplay
          /> */}
          <Card isFooterBlurred className="w-[600px] md:h-[300px] h-[280px] col-span-12 sm:col-span-7">

            {savedLastUserData?.og_image ? <Image
              alt="OG Image"
              className="z-0 w-full h-full object-cover"
              src={savedLastUserData?.og_image}
              height={400}
              width={200}
            /> : <ProSkeleton height={400} />}
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="w-6 h-11"
                  src={Assets.Logo.icon_light}
                  height={400}
                  width={200}
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">
                    {savedLastUserData?.first_name ? `${savedLastUserData?.first_name} | viiew.me` : '...'}
                  </p>
                  <p className="text-tiny text-white/60">{savedLastUserData?.first_name ? "A portfolio that tells your story with grace. Explore my viiew.me." : '...' }</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
        <DotLottieReact
          src="https://lottie.host/46234097-80f9-4e7f-a23f-4945cb4420d7/ko5bALJXyd.lottie"
          loop
          autoplay
          className='absolute w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'

        />
        <div className='md:w-fit w-full mx-auto mt-4 text-center'>
          <div className='flex justify-center items-center gap-2 flex-col pb-4 md:w-[300px] mx-auto'>
            <ProSnippet symbol='>' text={`https://viiew.me/${savedLastUserData?.custom_username || '...'}`} className='w-full' />
            <ActionButton
              as={Link}
              href={`https://viiew.me/${savedLastUserData?.custom_username}`}
              radius='sm'
              className='w-full'
              variant='flat'
              target='_blank'
            >
              <ProIcon name='BiHappyHeartEyes' size={18} color='#fff' />
              Explore my viiew</ActionButton>
            <ActionButton
              radius='sm'
              className='w-full'
              variant='flat'
              onPress={handleShare}
            >
              <ProIcon name='LuShare2' size={18} color='#fff' /><span className='text-md'>Share viiew</span>
            </ActionButton>
          </div>

        </div>
      </SheetBody>
    </>
  )
}

function PaymentFailed() {
  return (
    <>
      <SheetHeader>
        <h2 className='text-2xl text-center'>Opps, Payment Failed!</h2>
      </SheetHeader>
      <SheetBody>
        <div className='w-full h-[200px] relative pb-8'>
          <DotLottieReact
            src="https://lottie.host/df4a0691-b99e-4bb9-8b10-5bc77a2cc014/H9lPutZIBj.lottie"
            loop
            autoplay
          />
        </div>
        <div className='w-[50%] mx-auto mt-4 text-center'>
          <h2 className='mb-4'>Your payment is failed. Please try again later!</h2>
          <div className='flex justify-center items-center gap-2 flex-col'>
          </div>
        </div>
      </SheetBody>
    </>
  )
}

const PaymentStatusSheet = (props) => {
  const { isSuccess, closeSheet, savedLastUserData, isPaymentFailed } = props
  return <Sheet isOpen={isSuccess} placement="bottom" onClose={() => closeSheet()} size='2xl'>
    {isPaymentFailed ? <PaymentFailed /> : <PaymentSuccess savedLastUserData={savedLastUserData} />}
  </Sheet>
}

export default PaymentStatusSheet