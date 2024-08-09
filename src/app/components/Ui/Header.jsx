"use client";
import { useEffect, useState } from "react";
import { useShopSchedule } from "@/app/context/ShopScheduleProvider";

export default function Header() {
  const [status, setStatus] = useState("เปิด");
  const [schedule, setSchedule] = useShopSchedule();
  let currentHour = new Date().getHours();
  let statusColor =
    status === "เปิด" || status.toLowerCase() === "open"
      ? "bg-green-500"
      : "bg-red-500";

  useEffect(() => {
    currentTimeHandler();
  }, [currentHour, schedule]);

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

  useEffect(() => {
    currentTimeHandler();
  }, [currentHour]);

  return (
    <>
      <div className="w-full flex gap-2 justify-start items-center">
        <span className="text-lg">Unique Burger</span>
        <span
          className={`text-lg px-2 py-1 rounded-xl ${statusColor} text-white drop-shadow-md`}
        >
          {status}
        </span>
        <span className="text-lg px-2 py-1 rounded-xl bg-green-500 text-white drop-shadow-md">
          {schedule != {} ? (
            <>
              {schedule.open} - {schedule.close}
            </>
          ) : (
            <>00:00 - 00:00</>
          )}
        </span>
      </div>
    </>
  );
}
