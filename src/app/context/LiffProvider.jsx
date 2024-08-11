"use client";
import { createContext, useContext, useEffect, useState } from "react";
import liff from "@line/liff";
const LiffContext = createContext();

export default function LiffProvider({ children }) {
  const [success, setSuccess] = useState(false);
  const [profile, setProfile] = useState({});
  // const [readyLiff, setReadyLiff] = useState({});

  async function initLiff() {
    try {
      let readyLiff = await liff.init({ liffId: "2006038699-3ezaqP6o" });
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

  useEffect(() => {
    let initProfile = initLiff();
    initProfile.then((res) => {
      setProfile(res);
      setSuccess(true);
    });
  }, []);

  return (
    <LiffContext.Provider value={[success, profile]}>
      {children}
    </LiffContext.Provider>
  );
}
export function useLiff() {
  return useContext(LiffContext);
}
