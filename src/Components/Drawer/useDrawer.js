import { anilShakthiData } from "@/Data/Anil-Shakthi";
import { useState } from "react";

export const useDrawer = () => {
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    wishes: "",
  });
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
    setLoading(true);

    fetch("https://api.iinve.com/v1/guests", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

  const handleSuggestion = (data) => {
    setFormData({
      ...formData,
      wishes: data,
    });
    setSelected(data);
  };
  return {
    handleComments,
    formData,
    handleSubmit,
    selected,
    setSelected,
    setFormData,
    handleSuggestion,
    loading,
  };
};
