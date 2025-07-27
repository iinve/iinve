export function getGreeting() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "Good morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good afternoon";
  } else if (hour >= 17 && hour < 21) {
    return "Good evening";
  } else {
    return "Good night";
  }
}

export const getHeading = (data) => {
  switch (data.event_type) {
    case "reception":
      return "The Wedding Reception of";
    case "nikkah":
      return "The Nikkah of";
    case "wedding_ml":
      return "hn-hm-ln-X-cm-hp-¶p-";
    case "custom":
      return data.event_heading;
    default:
      return "The Wedding of";
  }
};
