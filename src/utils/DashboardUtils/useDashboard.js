import { useEffect, useState } from "react";

const useDashboard = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const api = "https://api.iinve.com/v1/guests/";
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
      if (window.innerWidth <= 1000) {
        handleSidebar();
      }
    }
  }, []);

  const fetchComments = () => {
    setIsLoading(true);
    fetch(api, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  };

  const handleSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  function getGreeting() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour < 12) {
      return "Good morning";
    } else if (currentHour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }

  const calculateTimeLeft = () => {
    const targetDate = new Date("December 5, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) return "EXPIRED";

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return `${days}D ${hours}H ${minutes}M `;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedCommentsLength =
    comments.length < 10 ? `0${comments.length}` : comments.length.toString();

  console.log(isLoading);

  return {
    handleSidebar,
    isSidebar,
    getGreeting,
    timeLeft,
    comments,
    fetchComments,
    isLoading,
    isClient,
    formattedCommentsLength,
  };
};

export default useDashboard;
