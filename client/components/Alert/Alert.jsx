"use client";
import { useState } from "react";

export default function Alert({ message, type }) {
  const [showAlert, setShowAlert] = useState(true);

  if (!showAlert) {
    return null;
  }

  return (
    <div
      className={`fixed  bottom-10 rounded-xl left-2/4 p-4 bg-black text-white text-center`}
    >
      {message}
      <button
        onClick={() => setShowAlert(false)}
        className="ml-2  top-0 text-white font-extrabold"
      >
        Close
      </button>
    </div>
  );
}
