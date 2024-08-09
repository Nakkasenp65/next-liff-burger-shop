"use client";
import { useState, createContext, useContext, useEffect } from "react";
import { db } from "../firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

const ScheduleContext = createContext();

export default function ShopScheduleProvider({ children }) {
  const [schedule, setSchedule] = useState({ open: "00:00", close: "00:00" });

  const getSchedule = async () => {
    // const docRef = doc(db, "schedule", "7uL2IDJlBKjHE3TmGHFe");
    // const docSnap = await getDoc(docRef);
    // if (docSnap.exists()) {
    //   const { open, close } = docSnap.data();
    //   setSchedule({ open, close });
    //   console.log("Schedeul Context Success");
    // }
    setSchedule({ open: "12:00", close: "16:00" });
  };

  useEffect(() => {
    getSchedule();
  }, []);

  return (
    <ScheduleContext.Provider value={[schedule, setSchedule]}>
      {children}
    </ScheduleContext.Provider>
  );
}

export const useShopSchedule = () => useContext(ScheduleContext);
