export const useQuotes = () => {
  const sendMessage = (phone) => {
    const message = encodeURIComponent(
      "Wishing you both a lifetime filled with love, laughter, and endless happiness. May your journey together be as beautiful as this special day."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const handleWishes = () => {
    const phoneNumbers = ["+919072102340", "919072102340"];
    phoneNumbers.forEach(sendMessage);
  };
  return { handleWishes };
};
