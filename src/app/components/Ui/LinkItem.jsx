"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
export default function LinkItem({ imageIcon, text, link }) {
  return (
    <>
      <Link
        href={link}
        className="w-full flex flex-col items-center justify-center gap-2 p-2 rounded-lg bg-white"
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="flex flex-col items-center justify-center h-full w-full gap-2"
        >
          <Image
            src={imageIcon}
            width={56}
            height={56}
            alt="Image Icon"
            priority
          />
          <span className="text-center">{text}</span>
        </motion.div>
      </Link>
    </>
  );
}
