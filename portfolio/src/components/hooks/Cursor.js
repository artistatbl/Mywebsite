import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="w-10 h-10 bg-dark  border-2 border-black rounded-full absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ left: position.x+10, top: position.y+10}}

    ></motion.div>
  );
};

export default Cursor;
