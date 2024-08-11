"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function DetailsPopUp({ item, handlePopup }) {
  const slideIn = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 250,
      },
      x: 0,
    },
    exit: { x: "100vw", opacity: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={slideIn}
    >
      <div className="w-full min-h-screen flex flex-col gap-6 p-4 rounded-2xl bg-white">
        <motion.div whileTap={{ scale: 0.9 }}>
          <button
            className="text-sm px-2 py-1 rounded-xl bg-green-500 text-white drop-shadow-md"
            onClick={handlePopup}
          >
            ปิดหน้าต่าง
          </button>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }}>
          <Image
            src={item.href}
            alt={item.name}
            width={300}
            height={300}
            priority
            className="w-full h-auto rounded-2xl"
          />
        </motion.div>
        <div className="flex flex-col gap">
          <span className="text-2xl font-bold">ราคา {item.price}.-</span>
          <span className="text-lg font-semibold">{item.name}</span>
          <p className=" mt-2 p-2 bg-lightGreyBackground rounded-lg text-sm">
            {item.details}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
