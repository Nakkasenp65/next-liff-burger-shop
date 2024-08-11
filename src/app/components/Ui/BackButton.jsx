"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function BackButton({ href = "/" }) {
  return (
    <Link href={href}>
      <motion.button
        className="text-sm px-2 py-1 rounded-xl bg-green-500 text-white drop-shadow-md"
        whileTap={{ scale: 0.9 }}
      >
        กลับ
      </motion.button>
    </Link>
  );
}
