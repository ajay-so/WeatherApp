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
    <footer className="bg-body-tertiary d-sm-flex justify-content-around text-center p-3 shadow-sm w-full">
      <p><b>Created by:</b>@Ajay Yadav</p>
      <p><b>Last Updated: </b> {lastUpdated || "Fetching..."}</p>
    </footer>

  );
}
