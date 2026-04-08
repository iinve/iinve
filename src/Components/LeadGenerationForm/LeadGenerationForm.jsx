"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ActionButton from "ProUI/ActionButton/ActionButton";
import { motion } from "framer-motion";
import { useState } from "react";
import { Drawer, Input, Label, TextArea } from "@heroui/react";
import ProDrawer from "ProUI/ProDrawer/ProDrawer";
import Button from "ProUI/Button/Button";
import { toast } from "sonner";

function Form({ setIsCompleted, handleClose }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    eventDate: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast("All fields are required!", { type: "error" });
      //   toast.error('Event has not been created')
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/notion", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result.success) setIsCompleted(true);
      else alert("Something went wrong ❌");
    } catch (error) {
      console.error(error);
      alert("Failed to submit ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Drawer.Header>
        <h2 className="text-2xl md:text-3xl text-center text-white">
          Create Your Invitation
        </h2>
        <p className="w-full md:w-1/2 mx-auto text-sm md:text-base text-center text-zinc-400 mt-2 mb-6">
          Share your details and our team will get in touch with you shortly.
        </p>
      </Drawer.Header>

      <div>
        <div className="w-full md:w-1/2 mx-auto pb-10 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label isRequired className="text-sm text-white/80">
              Name
            </Label>
            <Input
              name="name"
              size="lg"
              variant="flat"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label isRequired className="text-sm text-white/80">
              Email
            </Label>
            <Input
              name="email"
              type="email"
              size="lg"
              variant="flat"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label isRequired className="text-sm text-white/80">
              Phone Number
            </Label>
            <Input
              name="number"
              size="lg"
              variant="flat"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label isRequired className="text-sm text-white/80">
              Event Date
            </Label>
            <Input
              name="eventDate"
              type="date"
              size="lg"
              variant="flat"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label isRequired className="text-sm text-white/80">
              Message
            </Label>
            <TextArea
              name="message"
              size="lg"
              variant="flat"
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button
          type="primary"
          size="lg"
          disabled={loading}
          isLoading={loading}
          onPress={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

function SuccessWindow({ handleClose, setIsCompleted }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center text-white h-full"
    >
      <Drawer.Header>
        <Drawer.Heading className="text-4xl font-bold tracking-tighter text-center text-white">
          Request Received.
        </Drawer.Heading>
      </Drawer.Header>

      <Drawer.Body className="flex flex-col items-center w-full">
        <motion.div
          variants={itemVariants}
          className="w-[400px] flex items-center justify-center my-4"
        >
          <DotLottieReact
            src="https://lottie.host/ffa1c4a3-8fdd-42e9-aca3-c6230fd2e9d5/jJncmmnT1D.lottie"
            autoplay
            loop
            className="z-10"
          />
        </motion.div>
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-white/90">We're on it.</h3>
          <p className="text-neutral-400 text-base leading-relaxed max-w-[280px] mx-auto mb-6">
            Our team will reach out shortly to finalize your digital invitation
            details.
          </p>
        </motion.div>
      </Drawer.Body>

      <Drawer.Footer>
        <Button
          slot="close"
          onClick={() => {
            setIsCompleted(false);
            handleClose();
          }}
        >
          Close
        </Button>
      </Drawer.Footer>
    </motion.div>
  );
}

const LeadGenerationForm = ({ isOpen, handleClose }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <ProDrawer isOpen={isOpen} onClose={handleClose} placement="bottom">
      {!isCompleted ? (
        <Form setIsCompleted={setIsCompleted} handleClose={handleClose} />
      ) : (
        <SuccessWindow
          handleClose={handleClose}
          setIsCompleted={setIsCompleted}
        />
      )}
    </ProDrawer>
  );
};
export default LeadGenerationForm;
