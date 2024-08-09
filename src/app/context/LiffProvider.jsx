"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { liff } from "@line/liff";
const LiffContext = createContext();

async function initLiff() {
  try {
    const readyLiff = await liff.init({
      liffId: process.env.NEXT_PUBLIC_LIFF_ID,
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
}

export default function LiffProvider({ children }) {
  const [success, setSuccess] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const liffProfile = initLiff();
    liffProfile.then((res) => {
      setProfile(res);
      setSuccess(true);
    });
  }, []);

  return (
    <LiffContext.Provider value={[success, profile, setProfile]}>
      {children}
    </LiffContext.Provider>
  );
}
export function useLiffProfile() {
  return useContext(LiffContext);
}
