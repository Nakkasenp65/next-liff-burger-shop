import liff from "@line/liff";
import Image from "next/image";
import { useEffect } from "react";

export default function LinemanButton({ borderShadow = null }) {
  async function handleLiff() {
    try {
      await liff.init({ liffId: "2006038699-3ezaqP6o" });
      if (!liff.isLoggedIn()) {
        liff.login();
      }
    } catch (error) {
      console.error(error);
    }
  }

  function openWindow() {
    liff.openWindow({
      url: "https://lin.ee/fUyorbV",
      external: true,
    });
  }

  useEffect(() => {
    handleLiff();
  }, []);

  return (
    <button
      onClick={openWindow}
      className={`flex flex-col p-2 gap-2 w-full bg-white ${borderShadow} rounded-lg justify-center items-center`}
    >
      <Image src="/lineman.png" alt="website logo" width={60} height={60} />{" "}
      สั่งเลย
    </button>
  );
}
