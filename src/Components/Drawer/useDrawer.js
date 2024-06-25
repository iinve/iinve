import { anilShakthiData } from "@/Data/Anil-Shakthi";
import { useState } from "react";

export const useDrawer = () => {
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    wishes: "",
  });
  console.log(anilShakthiData?.wishes);
  console.log(formData);
  const handleComments = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    anilShakthiData?.wishes?.push(formData);
  };
  return { handleComments, formData, handleSubmit };
};
