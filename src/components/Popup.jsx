
import { useEffect, useState } from "react";
import "./Popup.css";

const STORAGE_KEY = "website_popup_closed";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay ">
      <div
        className="popup-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
      >
        <button
          className="popup-close"
          onClick={handleClose}
          aria-label="Close popup"
        >
          &times;
        </button>

        <h2 id="popup-title">Welcome to Our Website!</h2>

      <img src="popup.avif" alt="popup" className="rounded-xl img-fluid object-cover mb-4" />

        <button className="popup-button" onClick={handleClose}>
          Got it!
        </button>
      </div>
    </div>
  );
}
