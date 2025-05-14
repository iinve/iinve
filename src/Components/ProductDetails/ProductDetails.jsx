import React from "react";
import Image from "next/image";
import { Assets } from "assets/assets";
import GetADemo from "Components/GetADemo/GetADemo";
import { motion, useScroll, useTransform } from "framer-motion";
import ActionButton from "ProUI/ActionButton/ActionButton";

const ProductDetails = ({ data }) => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 400], [1, 2]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  if (!data) return;
  return (
    <>
      <div className="w-full px-4 md:px-8 lg:px-16 py-10 text-gray-800">
        {/* Hero Banner */}
        <div className="w-full flex justify-center mb-12 relative">
          <div className="w-full max-w-7xl h-[200px] md:h-[250px] relative rounded-3xl overflow-hidden shadow-xl">
            <motion.div className="absolute inset-0" style={{ scale }}>
              <Image
                src={data.bannerImage}
                alt="iinve e-invitation banner"
                className="object-cover opacity-30"
                fill
                priority
              />
            </motion.div>
            <motion.div
              style={{ scale, opacity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <h1 className="text-white text-2xl md:text-4xl font-bold text-center">
                {data.heroHead}
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Intro Section */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {data.introHeading}
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            {data.introText}
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {data.features.map((item, i) => (
            <div
              key={i}
              className="bg-black rounded-xl p-6 shadow-md hover:shadow-lg transition border border-blue-900"
            >
              <h3 className="text-xl text-white font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Image + Content */}
        <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto mb-20 items-center">
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={data.heroImage}
              alt="iinve Digital Invitation"
              width={800}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 pt-10 px-4 md:px-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              {data.whyChoose.heading}
            </h3>
            <p className="text-lg mb-4 text-gray-400">
              {data.whyChoose.description}
            </p>
            <ul className="!list-disc pl-5 space-y-4 text-gray-400">
              {data.whyChoose.points.map((point, i) => (
                <li key={i} className="list-disc">
                  {point}
                </li>
              ))}
            </ul>
           <div className="flex justify-center md:justify-start">
           <ActionButton size="lg" color="primary" onClick={()=>{}} className='w-1/2 mt-8'>
                Create wall
              </ActionButton>
           </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-5xl mx-auto mb-20 text-center">
          <h3 className="text-3xl font-bold mb-6 text-white">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {data.steps.map((step, i) => (
              <div
                key={i}
                className="bg-black rounded-xl p-6 shadow-md hover:shadow-lg transition border border-blue-900"
              >
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {step.step}
                </h4>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <GetADemo />
    </>
  );
};

export default ProductDetails;
