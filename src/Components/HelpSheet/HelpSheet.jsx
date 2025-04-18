"use client";
import ActionButton from "ProUI/ActionButton/ActionButton";
import { ProForm, ProInput, ProTextArea } from "ProUI/Form/Form";
import { Sheet, SheetBody, SheetHeader } from "ProUI/Sheet/Sheet";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState } from "react";
import axios from "axios";

function ContactForm({ setIsCompletedHelpSubmission, handleClose }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    if (!data.name || !data.email || !data.message) {
      alert("All fields are required!");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post("/api/help", data, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 201) {
        setIsCompletedHelpSubmission(true); // ✅ Use this instead of setIsCompleted
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SheetHeader>
        <h2 className="text-2xl md:text-3xl text-center">
          Get in Touch with Us
        </h2>
        <p className="w-full md:w-1/2 mx-auto text-sm md:text-md text-center !text-zinc-400">
          Have questions, feedback, or need assistance? We’d love to hear from
          you! Reach out to us, and we’ll get back to you as soon as possible.
        </p>
      </SheetHeader>
      <SheetBody>
        <div className="w-full md:w-1/2 mx-auto pb-10">
          <ProForm onSubmit={handleSubmit} validationBehavior="native">
            <ProInput
              type="text"
              placeholder="Name"
              name="name"
              autoComplete="off"
              variant="bordered"
              size="lg"
              isRequired
              errorMessage="Please enter Name"
            />
            <ProInput
              type="email"
              placeholder="Email"
              name="email"
              autoComplete="off"
              variant="bordered"
              size="lg"
              isRequired
              errorMessage="Please enter a valid email"
            />
            <ProTextArea
              placeholder="Message"
              name="message"
              autoComplete="off"
              variant="bordered"
              size="lg"
              isRequired
              errorMessage="Please enter Message"
            />
            <div className="flex justify-end w-full mt-4">
              <ActionButton
                color="danger"
                variant="light"
                size="lg"
                className="mr-4"
                onClick={handleClose}
              >
                Cancel
              </ActionButton>
              <ActionButton
                type="submit"
                color="primary"
                size="lg"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
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
      <SheetBody>
        <div className="w-full h-[200px] relative">
          <DotLottieReact
            src="https://lottie.host/c1eca2cb-905a-4b20-80f1-dcebdc5c63c8/ps2y4ePLlY.lottie"
            loop
            autoplay
          />
        </div>
        <div className="w-[50%] mx-auto mt-4 text-center pb-6">
          <h2 className="text-2xl text-center">Thank you for reaching out!</h2>
          <p className="text-md text-center text-zinc-400">
            We&apos;ve received your message and will get back to you as soon as
            possible.
            <br />
            Keep an eye on your inbox.
          </p>

          <div className="flex justify-center items-center gap-2 flex-col mt-8">
            <ActionButton
              color="danger"
              variant="light"
              size="lg"
              className="mr-4"
              onClick={handleClose}
            >
              Close
            </ActionButton>
          </div>
        </div>
      </SheetBody>
    </>
  );
}

const HelpSheet = (props) => {
  const {
    isOpen,
    handleClose,
    isCompletedHelpSubmission,
    setIsCompletedHelpSubmission,
  } = props;
  return (
    <Sheet isOpen={isOpen} placement="bottom" onClose={handleClose} size="2xl">
      {!isCompletedHelpSubmission ? (
        <ContactForm
          setIsCompletedHelpSubmission={setIsCompletedHelpSubmission}
          handleClose={handleClose}
        />
      ) : (
        <SuccessWindow handleClose={handleClose} />
      )}
    </Sheet>
  );
};

export default HelpSheet;
