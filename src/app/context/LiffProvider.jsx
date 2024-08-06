"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { liff } from "@line/liff";
const liffId = process.env.NEXT_PUBLIC_LIFF_ID;
let success = false;
const LiffContext = createContext();

const initLiff = async () => {
  try {
    const readyLiff = await liff.init({
      liffId: "2005699675-EBxv8d2y",
    });
    if (!liff.isLoggedIn()) {
      liff.login();
      console.log("POS:LIFF Login Success: " + liff.isLoggedIn());
    }
    const profile = await liff.getProfile();
    let liffProfile = { ...profile };
    return liffProfile;
  } catch (error) {
    console.error("liff init error: ", error.message);
  }
};

export default function LiffProvider({ children }) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const liffProfile = initLiff();
    liffProfile.then((res) => {
      setProfile(res);
      success = true;
      console.log(res);
    });
  }, []);

  if (success) console.log(profile.userId);

  return (
    <LiffContext.Provider value={[success, profile, setProfile]}>
      {children}
    </LiffContext.Provider>
  );
}
export const useLiffProfile = () => useContext(LiffContext);
