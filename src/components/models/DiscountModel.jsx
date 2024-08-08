//
//

import { useState, useEffect } from "react";
import discount from "../../assets/animation/discount.json";
import Lottie from "lottie-react";

export default function DiscountModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const isModalClosed = localStorage.getItem("isModalClosed");
    if (isModalClosed === "true") {
      setIsOpen(false);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDoNotShowAgain = () => {
    localStorage.setItem("isModalClosed", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100000]">
      <div className="flex flex-col justify-center items-center bg-white rounded shadow-lg text-center w-[80vw] h-[60vh]  md:w-[60vw] md:h-[80vh]">
        <div className="relative mb-4 max-w-[60vw] h-[60vh]">
          <Lottie animationData={discount} className="w-full h-full" />
          <p className="absolute bottom-0 w-full -translate-x-1/2 left-1/2 text-4xl lg:text-5xl font-bold text-indigo-700 p-4 md:p-6">
            Don’t miss out special discount.
          </p>
        </div>
        <div className="p-2">
          <button
            className="btn bg-black mr-2 hover:bg-black hover:bg-opacity-90"
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className="btn"
            onClick={handleDoNotShowAgain}
          >
            Don’t Show Again
          </button>
        </div>
      </div>
    </div>
  );
}
