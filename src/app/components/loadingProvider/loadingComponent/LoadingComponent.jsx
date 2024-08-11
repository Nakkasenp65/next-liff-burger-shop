import Image from "next/image";
import { motion } from "framer-motion";
export default function LoadingComponent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full h-screen flex flex-col justify-center items-center gap-2"
      >
        <Image
          src="/cooking.gif"
          width={200}
          height={200}
          alt="cooking image"
        />
        <div className="flex">
          <span className="animate-bounce ">⏳</span>
          <p>กำลังเตรียมการ...</p>
        </div>
      </motion.div>
    </>
  );
}
