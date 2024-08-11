"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLiff } from "@/app/context/LiffProvider";
import Link from "next/link";
import LinemanButton from "./LinemanButton";
import { useEffect } from "react";
export default function Warning({ setPopup }) {
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

  useEffect(() => {
    let flag = localStorage.getItem("firstTimeEntry");
    console.log(flag);
    if (flag === null) {
      localStorage.setItem("firstTimeEntry", "true");
      flag = "true";
    }
    setPopup(flag === "true");
  }, []);

  function closePopup() {
    localStorage.setItem("firstTimeEntry", "false");
    setPopup(false);
  }

  const [success, profile] = useLiff();
  if (profile) {
    console.log(profile);
  }

  return (
    <div>
      <motion.div
        className="fixed flex justify-center items-center w-full h-screen top-0 left-0 text-black p-4 backdrop-blur-md z-10"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={slideIn}
      >
        <div className="w-80 px-4 py-12 min-h-80 flex flex-col gap-4 shrink bg-white rounded-3xl border border-black">
          <span className="text-lg">สวัสดีครับ👋🏻 {profile.displayName}</span>
          <div className="w-full flex justify-center items-center">
            <img
              src={profile.pictureUrl}
              alt="Profile Image"
              width={100}
              height={100}
              className="rounded-full drop-shadow-lg"
            />
          </div>
          <p>
            นี่เป็นเว็บไซต์โชวข้อมูลและเมนูทางร้าน สามารถสั่งซื้อผ่าน Line man
            หรือ เลือกดูก่อนสั่งผ่านแชทได้เลยครับ!
          </p>
          <button
            className="flex flex-col p-2 gap-2 w-full border border-black rounded-lg justify-center items-center drop-shadow-lg"
            onClick={closePopup}
          >
            <Image
              src="/logo.jpg"
              alt="website logo"
              width={60}
              height={60}
              className="rounded-full"
            />{" "}
            เยี่ยมชมเว็บไซต์
          </button>
          <LinemanButton borderShadow={"border border-black drop-shadow-lg"} />
        </div>
      </motion.div>
    </div>
  );
}
