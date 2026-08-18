import { useEffect, useState } from "react";

function parseTargetDate(date, time) {
  if (!date) return null;

  let hours = 0;
  let minutes = 0;

  const match = /^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i.exec(time?.trim() || "");
  if (match) {
    hours = parseInt(match[1], 10);
    minutes = parseInt(match[2], 10);
    const meridiem = match[3]?.toUpperCase();
    if (meridiem === "PM" && hours !== 12) hours += 12;
    if (meridiem === "AM" && hours === 12) hours = 0;
  }

  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day, hours, minutes, 0);
}

function getTimeLeft(target) {
  if (!target) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };

  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  };
}

export const useCountdown = (date, time) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    done: false,
  });

  useEffect(() => {
    const target = parseTargetDate(date, time);
    setTimeLeft(getTimeLeft(target));

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);

    return () => clearInterval(interval);
  }, [date, time]);

  return timeLeft;
};
