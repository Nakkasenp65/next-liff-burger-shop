"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
// import { useShopSchedule } from "@/app/context/ShopScheduleProvider";

export default function Header() {
  const [status, setStatus] = useState("เปิด");
  const [schedule, setSchedule] = useState({ open: "11:00", close: "21:00" });
  let currentHour = new Date().getHours();
  let statusColor =
    status === "เปิด" || status.toLowerCase() === "open"
      ? "bg-green-500"
      : "bg-red-500";

  useEffect(() => {
    currentTimeHandler();
  }, []);

  async function currentTimeHandler() {
    if (schedule) {
      let openTime = schedule.open.split(":")[0];
      let closeTime = schedule.close.split(":")[0];
      if (currentHour >= openTime && currentHour < closeTime) {
        setStatus("เปิด");
      } else {
        setStatus("ปิด");
      }
    }
  }
  const x = useMotionValue(0);

  return (
    <motion.div
      className="flex items-center justify-between w-full"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{ x }}
    >
      <span className="text-sm">Unique Burger</span>
      <div className="flex justify-end items-center gap-2">
        <span
          className={`text-sm px-2 py-1 rounded-xl ${statusColor} text-white drop-shadow-md`}
        >
          {status}
        </span>
        {/* status base on open or close schedule */}
        <span className="text-sm px-2 py-1 rounded-xl bg-green-500 text-white drop-shadow-md">
          {schedule != {} ? (
            <>
              {schedule.open} - {schedule.close}
            </>
          ) : (
            <>00:00 - 00:00</>
          )}
        </span>
        {/* Open and close Schedule */}
      </div>
    </motion.div>
  );
}
