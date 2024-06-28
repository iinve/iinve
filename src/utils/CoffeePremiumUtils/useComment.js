import { useEffect, useState } from "react";

export const useComment = () => {
  const api = "https://api.iinve.com/v1/guests/";
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    wishes: "",
  });
  const [updateTrigger, setUpdateTrigger] = useState(false); // New state to force re-render
  const isNotValid = !formData?.name || !formData?.place || !formData?.wishes;

  useEffect(() => {
    fetchComments();
  }, [comments]); 

  const fetchComments = () => {
    fetch(api, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

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

    const payload = {
      name: formData?.name,
      place: formData?.place,
      message: formData?.wishes,
    };

    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        setComments([...comments, data]);
        setUpdateTrigger(!updateTrigger);
        setTimeout(() => {
          setFormData({
            name: "",
            place: "",
            wishes: "",
          });
          setSelected("");
          setLoading(false);
          setDrawerOpen(false);
        }, 3500);
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
    isNotValid,
    drawerOpen,
    setDrawerOpen,
    comments,
    setLoading,
  };
};
