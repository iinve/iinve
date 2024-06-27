import { anilShakthiData } from "@/Data/Anil-Shakthi";
import { useState } from "react";

export const useDrawer = () => {
  const [selected, setSelected] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    wishes: "",
  });
  //   console.log(anilShakthiData?.wishes);
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

    fetch("https://api.iinve.com/v1/guests", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSuggestion = (data) => {
    setFormData({
      ...formData,
      wishes: data,
    });
  };
  return {
    handleComments,
    formData,
    handleSubmit,
    selected,
    setSelected,
    setFormData,
    handleSuggestion,
  };
};
