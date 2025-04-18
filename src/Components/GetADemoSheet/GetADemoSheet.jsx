'use client'
import ActionButton from '@/ProUI/ActionButton/ActionButton'
import { ProForm, ProInput, ProTextArea } from '@/ProUI/Form/Form'
import { Sheet, SheetBody, SheetHeader } from '@/ProUI/Sheet/Sheet'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import axios from "axios"
import { useState } from 'react'


function DemoForm({ setIsCompleted, handleClose }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    if (!data.name || !data.email || !data.message) {
      alert("All fields are required!");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post("/api/book-demo", data);
      if (response.status === 201) {
        setIsCompleted(true);
      } else {
        addToast({
          title: "Opps!",
          description: "Something went wrong. Please try again.",
          variant: 'flat',
          color: "warning",
          size: "md"
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      addToast({
        title: "Opps!",
        description: "Failed to submit. Please try again later.",
        variant: 'flat',
        color: "warning",
        size: "md"
      })
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SheetHeader>
        <h2 className="text-2xl md:text-3xl text-center">Unlock the Power of iinve</h2>
        <p className="w-full md:w-1/2 mx-auto text-sm md:text-md text-center !text-zinc-400">
        See how iinve can transform the way you invite with seamless, customizable digital invitations. Get a live demo and explore powerful features designed to help you create stunning, share-worthy event invites.</p>
      </SheetHeader>

      <SheetBody>
        <div className="w-full md:w-1/2 mx-auto pb-10">
          <ProForm onSubmit={handleSubmit} validationBehavior="native">
            <ProInput type="text" placeholder="Name" name="name" autoComplete="off" variant="bordered" size="lg" isRequired errorMessage="Please enter Name" />
            <ProInput type="email" placeholder="Email" name="email" autoComplete="off" variant="bordered" size="lg" isRequired errorMessage="Please enter a valid email" />
            <ProTextArea placeholder="Message" name="message" autoComplete="off" variant="bordered" size="lg" isRequired errorMessage="Please enter Message" />
            
            <div className="flex justify-end w-full mt-4">
              <ActionButton color="danger" variant="light" size="lg" className="mr-4" onClick={handleClose}>Cancel</ActionButton>
              <ActionButton type="submit" color="primary" size="lg" disabled={loading} isLoading={loading}>
                Submit
              </ActionButton>
            </div>
          </ProForm>
        </div>
      </SheetBody>
    </>
  );
}

function SuccessWindow({ handleClose }) {
  return (
    <>
      <SheetHeader>
        <h2 className='text-2xl text-center'>Thank you for requesting a demo!</h2>
      </SheetHeader>
      <SheetBody>
        <div className='w-full h-[200px] relative'>
          <DotLottieReact
            src="https://lottie.host/c1eca2cb-905a-4b20-80f1-dcebdc5c63c8/ps2y4ePLlY.lottie"
            loop
            autoplay
          />
        </div>
        <div className='w-[50%] mx-auto mt-4 text-center pb-6'>
          <h2 className='mb-4'>Our team will touch you shortly.</h2>
          <div className='flex justify-center items-center gap-2 flex-col'>
            <ActionButton color='danger' variant='light' size='lg' className='mr-4' onClick={handleClose}>Close</ActionButton>
          </div>
        </div>
      </SheetBody>
    </>
  )
}

const GetADemoSheet = (props) => {
  const { isOpen, handleClose, isCompleted, setIsCompleted } = props
  return <Sheet isOpen={isOpen} placement="bottom" onClose={handleClose} size='2xl'>
    {!isCompleted ? <DemoForm setIsCompleted={setIsCompleted} handleClose={handleClose} /> : <SuccessWindow handleClose={handleClose} />}
  </Sheet>
}

export default GetADemoSheet