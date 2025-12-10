import { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 250);
    });
  }, []);

  return show ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center rounded-full
             bg-[#0096ff] text-white shadow-lg
             hover:bg-[#00b8ff] hover:shadow-[0_0_15px_#00b4d8]
             transition-all"
    >
    <BsArrowUp size={28} />
    </button>
  ) : null;
};

export default ScrollTopBtn;
