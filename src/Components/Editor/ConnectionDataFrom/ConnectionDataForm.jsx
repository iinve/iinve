import { Select, SelectItem } from "@heroui/react";
import { ProInput, ProRadio, ProRadioGroup } from "@/ProUI/Form/Form";
import { useState, useMemo } from "react";

export default function CollaboratorForm({ selectedCollaboration, handleCollaborationButtonChange, formData, setFormData }) {
  const [connectMode, setConnectMode] = useState(formData?.connect_details?.mode || "email");
  const [inputValue, setInputValue] = useState(formData?.connect_details?.value || "");

  // Validation functions
  const validateEmail = (value) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
  const validatePhone = (value) => /^\+?[1-9]\d{9,14}$/.test(value); // WhatsApp: 10-15 digits, optional "+"

  // Determine if input is invalid
  const isInvalid = useMemo(() => {
    if (inputValue === "") return false; // Allow empty field without error
    return connectMode === "email" ? !validateEmail(inputValue) : !validatePhone(inputValue);
  }, [inputValue, connectMode]);

  const handleModeChange = (value) => {
    setConnectMode(value);
    setInputValue(""); // Reset input when switching mode
    setFormData((prev) => ({
      ...prev,
      connect_details: { mode: value, value: "" }, // Store only selected mode & value
    }));
  };

  const handleInputChange = (value) => {
    setInputValue(value); // First update state
    setFormData((prev) => ({
      ...prev,
      connect_details: { mode: connectMode, value }, // Ensure full value is stored
    }));
  };

  return (
    <>
      <div className='flex items-center my-8 justify-between' key="collab_button">
        <ProRadioGroup
          color="primary"
          defaultValue="show"
          value={selectedCollaboration}
          onValueChange={handleCollaborationButtonChange}
          orientation="horizontal"
          label='Collaboration Button'
        >
          <ProRadio value="show">Show</ProRadio>
          <ProRadio value="hide">Hide</ProRadio>
        </ProRadioGroup>
      </div>
      {selectedCollaboration === "show" && <div>
        <h2 className="md:text-lg font-semibold text-base mb-2">
          Add Contact Details <span className="opacity-50">(Select a medium for contacting)</span>
        </h2>

        {/* Select Connection Mode */}
        <Select
          selectedKeys={[connectMode]}
          onChange={(e) => handleModeChange(e.target.value)}
          placeholder="Select Connection Mode"
        >
          <SelectItem key="email" value="email">Email</SelectItem>
          <SelectItem key="whatsapp" value="whatsapp">WhatsApp</SelectItem>
        </Select>

        {/* Input for Email or WhatsApp */}
        <ProInput
          className="mt-4"
          type={connectMode === "email" ? "email" : "tel"}
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)} // ✅ Store full value
          placeholder={connectMode === "email" ? "Enter your email" : "Enter your WhatsApp number"}
          variant="bordered"
          color={isInvalid ? "danger" : "success"}
          isInvalid={isInvalid}
          errorMessage={isInvalid ? (connectMode === "email" ? "Please enter a valid email" : "Please enter a valid WhatsApp number") : ""}
        />
      </div>}
    </>
  );
}
