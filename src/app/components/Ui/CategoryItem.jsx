"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
export default function CategoryItem({ imageName, displayName, href }) {
  return (
    <>
      <Link
        href={`/${href}`}
        className="flex flex-grow w-28 h-28 flex-col justify-center items-center  bg-lightGreyBackground rounded-lg"
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="flex flex-col items-center justify-center h-full w-full gap-2"
        >
          <Image
            src={`/${imageName}.png`}
            alt={`image-icon-${imageName}`}
            width={56}
            height={56}
            priority
          />
          <p className="text-sm">{displayName}</p>
        </motion.div>
      </Link>
    </>
  );
}
