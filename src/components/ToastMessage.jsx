import React, { useEffect } from "react";

const ToastMessage = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-4 right-4 px-6 py-3 rounded-lg text-white shadow-xl z-[60]
      ${type === "error" ? "bg-red-600" : "bg-green-600"}`}
      dir="rtl"
    >
      {message}
    </div>
  );
};

export default ToastMessage;
