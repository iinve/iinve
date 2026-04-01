'use client'

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ActionButton from "ProUI/ActionButton/ActionButton";
import { ProForm, ProInput, ProTextArea } from "ProUI/Form/Form";
import { motion } from "framer-motion";
import { Sheet, SheetBody, SheetHeader } from "ProUI/Sheet/Sheet";
import { useState } from 'react'

function Form({ setIsCompleted, handleClose }) {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (data) => {
        if (!data.name || !data.email || !data.message) {
            alert("All fields are required!");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/notion", {
                method: "POST",
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    number: data.number,
                    message: data.message,
                    eventDate: data.eventDate,
                }),
            });

            const result = await res.json();

            if (result.success) {
                setIsCompleted(true);
            } else {
                alert("Something went wrong ❌");
            }

        } catch (error) {
            console.error(error);
            alert("Failed to submit ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <SheetHeader>
                <h2 className="text-2xl md:text-3xl text-center">
                    Create Your Invitation
                </h2>
                <p className="w-full md:w-1/2 mx-auto text-sm md:text-md text-center !text-zinc-400">
                    Share your details and our team will get in touch with you shortly.
                </p>
            </SheetHeader>

            <SheetBody>
                <div className="w-full md:w-1/2 mx-auto pb-10">
                    <ProForm onSubmit={handleSubmit} validationBehavior="native">

                        <ProInput
                            name="name"
                            size="lg"
                            variant="flat"
                            isRequired
                            label="Name"
                        />

                        <ProInput
                            name="email"
                            type="email"
                            size="lg"
                            variant="flat"
                            isRequired
                            label="Email"
                        />

                        <ProInput
                            name="number"
                            size="lg"
                            variant="flat"
                            isRequired
                            label="Phone Number"
                        />

                        <ProInput
                            name="eventDate"
                            type="date"
                            className='!text-black'
                            placeholder="Event Date"
                            size="lg"
                            variant="flat"
                            isRequired
                            label="Event Date"
                        />

                        <ProTextArea
                            name="message"
                            size="lg"
                            variant="flat"
                            isRequired
                            label="Message"
                        />

                        <div className="flex justify-end w-full mt-4">
                            <ActionButton
                                color="danger"
                                variant="flat"

                                size="lg"
                                className="mr-4 text-white"
                                onClick={handleClose}
                            >
                                Cancel
                            </ActionButton>

                            <ActionButton
                                type="submit"
                                color="primary"
                                size="lg"
                                disabled={loading}
                                isLoading={loading}
                            >
                                Submit
                            </ActionButton>
                        </div>

                    </ProForm>
                </div>
            </SheetBody>
        </>
    );
}


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { type: "spring", stiffness: 100, damping: 15 }
    }
};

function SuccessWindow({ handleClose }) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center py-10 px-6 text-white"
        >
            <SheetHeader className="border-none bg-transparent">
                <motion.h2
                    variants={itemVariants}
                    className="text-4xl font-bold tracking-tighter text-center"
                >
                    Request Received.
                </motion.h2>
            </SheetHeader>

            <SheetBody className="flex flex-col items-center w-full max-w-md">
                {/* Animated Lottie Container with Glow */}
                <motion.div
                    variants={itemVariants}
                    className="relative w-fullflex items-center justify-center my-4"
                >
                    {/* Subtle Background Glow behind the Lottie */}
                    <div className="" />

                    <DotLottieReact
                        src="https://lottie.host/ffa1c4a3-8fdd-42e9-aca3-c6230fd2e9d5/jJncmmnT1D.lottie"
                        autoplay
                        loop
                        className="z-10"
                    />
                </motion.div>

                <motion.div variants={itemVariants} className="text-center space-y-6">
                    <div className="space-y-1">
                        <h3 className="text-lg font-medium text-white/90">We’re on it.</h3>
                    </div>

                    <p className="text-neutral-400 text-md leading-relaxed max-w-[280px] mx-auto">
                        Our team will reach out shortly to finalize your digital invitation details.
                    </p>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="pt-4"
                    >
                        <ActionButton
                            className="border-1"
                            color="default"
                            variant="bordered"
                            onClick={handleClose}
                        >
                            Close
                        </ActionButton>
                    </motion.div>
                </motion.div>
            </SheetBody>
        </motion.div>
    );
}


const FormSheet = ({ isOpen, handleClose }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    return (
        <Sheet
            isOpen={isOpen}
            placement="bottom"
            onClose={handleClose}
            size='2xl'
            className="bg-[#0f0f0f]"
            backdrop="blur"
        >
            {!isCompleted ? (
                <Form
                    setIsCompleted={setIsCompleted}
                    handleClose={handleClose}
                />
            ) : (
                <SuccessWindow handleClose={handleClose} />
            )}
        </Sheet>
    );
};

export default FormSheet;