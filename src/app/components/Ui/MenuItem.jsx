"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function MenuItem({ item, handlePopup, ...props }) {
  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <div
        className="relative w-full flex flex-col flex-shrink gap-2 "
        onClick={handlePopup}
      >
        <Image
          src={item.href}
          alt="burger set menu"
          width={300}
          height={300}
          priority
          className="w-full h-auto rounded-lg"
        />
        <div className="flex flex-col rounded-b-lg">
          <span className="text-base">{item.price} ฿</span>
          <span className="text-sm font-bold">{item.name}</span>
        </div>
      </div>
    </motion.div>
  );
}
