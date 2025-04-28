'use client';

import { Tab, Tabs } from "@heroui/react"; // Import Hero UI components
import TemplateCard from "Components/TemplateCard/TemplateCard";
import { templateData } from "data/templateData";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Image from "next/image";
import ActionButton from "ProUI/ActionButton/ActionButton";
import { Sheet, SheetBody, SheetFooter } from "ProUI/Sheet/Sheet";
import { useMemo, useState } from "react";
import useWindowDimensions from "utils/useWindowDimensions";

const Page = () => {
  const [selectedTemplate, setSelectedTemplate] = useState();
  const { isMobile } = useWindowDimensions();
  const [selectedTab, setSelectedTab] = useState("all");

  const handleSelectedTemplate = (template) => {
    setSelectedTemplate(template);
  };

  const handleCreateNow = () => {
    const message = `Hello! 👋 \nI would like to place an order for the "*${selectedTemplate?.name}*" digital invitation.`;
    const whatsappNumber = "918075952456";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_self');
  };

  const handleCancel = () => {
    setSelectedTemplate(null);
  };

  // Filter templates based on selected tab
  const filteredTemplates = useMemo(() => {
    return selectedTab === "all"
      ? templateData
      : templateData.filter(template => template.type === selectedTab);
  }, [selectedTab, templateData]);

  return (
    <div className="h-full min-h-screen pt-[100px]">
      <h2 className="md:mb-10 md:mt-14 mb-2 mt-10 text-2xl text-center">Choose your favorite</h2>
      <p className="text-center text-sm md:text-md text-gray-500 w-[90%] mx-auto mb-6">You can choose your favorite invitation, and create yours</p>
      {/* Hero UI Tabs */}
      <div style={{ colorScheme: "dark" }} className="antialiased dark text-center md:px-20">
        <Tabs aria-label="Template Types" value={selectedTab} onValueChange={setSelectedTab} className="mb-1" variant="underlined" color="primary">
          <Tab key="all" title="All">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto py-10">
              {filteredTemplates.map((template, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}  // Initial state (hidden, below)
                  animate={{ opacity: 1, y: 0 }}   // Final state (visible, in place)
                  transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
                >
                  <TemplateCard
                    key={index}
                    template={template}
                    isPro={template?.isPro}
                    selection
                    isSelected={selectedTemplate?.id === template.id}
                    onSelect={() => handleSelectedTemplate(template)}
                  />
                </motion.div>
              ))}
            </div>
          </Tab>
          <Tab key="basic" title="Basic">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto py-10">
              {filteredTemplates.map((template, index) => (
                template.type === 'basic' && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}  // Initial state (hidden, below)
                    animate={{ opacity: 1, y: 0 }}   // Final state (visible, in place)
                    transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
                  >
                    <TemplateCard
                      key={index}
                      template={template}
                      isPro={template?.isPro}
                      selection
                      isSelected={selectedTemplate?.id === template.id}
                      onSelect={() => handleSelectedTemplate(template)}
                    />
                  </motion.div>
                )
              ))}
            </div>
          </Tab>
          <Tab key="standard" title="Standard">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto py-10">
              {filteredTemplates.map((template, index) => (
                template.type === 'standard' && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}  // Initial state (hidden, below)
                    animate={{ opacity: 1, y: 0 }}   // Final state (visible, in place)
                    transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
                  >
                    <TemplateCard
                      key={index}
                      template={template}
                      isPro={template?.isPro}
                      selection
                      isSelected={selectedTemplate?.id === template.id}
                      onSelect={() => handleSelectedTemplate(template)}
                    />
                  </motion.div>
                )
              ))}
            </div>
          </Tab>
          <Tab key="premium" title="Premium">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto py-10">
              {filteredTemplates.map((template, index) => (
                template.type === 'premium' && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}  // Initial state (hidden, below)
                    animate={{ opacity: 1, y: 0 }}   // Final state (visible, in place)
                    transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
                  >
                    <TemplateCard
                      key={index}
                      template={template}
                      isPro={template?.isPro}
                      selection
                      isSelected={selectedTemplate?.id === template.id}
                      onSelect={() => handleSelectedTemplate(template)}
                    />
                  </motion.div>
                )
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>

      {/* Sheet for Template Details */}
      <div>
        <Sheet isOpen={!!selectedTemplate} onClose={handleCancel} placement={"bottom"} size={isMobile ? 'full' : '5xl'} hideCloseButton>
          <SheetBody>
            <div className="flex justify-center items-center p-8">
              <div className="w-full md:w-[400px] h-[540px] relative overflow-scroll border-2 border-white rounded-3xl">
                <Image src={selectedTemplate?.full_template} alt={selectedTemplate?.name} width={1000} height={1000} className="object-cover" />
              </div>
            </div>
          </SheetBody>
          <SheetFooter>
            <div className="flex gap-2">
              <ActionButton size="md" color="primary" variant="bordered" isLoading={false} onClick={handleCancel}>Cancel</ActionButton>
              <ActionButton size="md" color="primary" isLoading={false} onClick={handleCreateNow}>Create Now</ActionButton>
            </div>
          </SheetFooter>
        </Sheet>
      </div>
    </div>
  );
}

export default Page;
