import { useState, useEffect } from "react";

export default function Footer() {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    // Get current date and time when component mounts
    const now = new Date();
    const formattedDate = now.toLocaleDateString(); // MM/DD/YYYY format
    const formattedTime = now.toLocaleTimeString(); // HH:MM:SS AM/PM format

    setLastUpdated(`${formattedDate} ,${formattedTime}`);
  }, []);

  return (
    <footer className="bg-body-tertiary text-center p-3 shadow-sm w-full">
      <b>Last Updated: </b> {lastUpdated || "Fetching..."}
    </footer>

  );
}
