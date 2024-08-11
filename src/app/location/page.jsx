"use client";
import { useEffect } from "react";
import BackButton from "../components/Ui/BackButton";
import Header from "../components/Ui/Header";
import liff from "@line/liff";

export default function Location() {
  useEffect(() => {
    liff.init({ liffId: "2006038699-3ezaqP6o" });
    console.log(liff.isLoggedIn());
  }, []);

  async function sendLocation() {
    liff
      .sendMessages([
        {
          type: "text",
          text: "Location",
        },
      ])
      .then(() => {
        console.log("message sent");
        liff.closeWindow();
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-start py-12 px-4 gap-12">
      <Header />
      <BackButton />
      <div className="w-full flex flex-col gap-4">
        <span className="text-sm ">สาขา ม.รังสิต (11.00 - 21.00 น.)</span>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.99127939493505!2d100.58824889931851!3d13.966909666911773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2818111bfaa1b%3A0x957861753090fabd!2zVU5JUVVFIEJVUkdFUiDguKrguLLguILguLIg4LihLuC4o-C4seC4h-C4quC4tOC4lQ!5e0!3m2!1sth!2sth!4v1723229346696!5m2!1sth!2sth"
          width="300"
          height="300"
          loading="lazy"
          className="w-full rounded-3xl drop-shadow-md"
        />

        <button
          className="w-full text-sm text-center rounded-lg p-2  bg-green-500 text-white drop-shadow-md"
          onClick={sendLocation}
        >
          ส่งโลเคชั่นไปยัง Line Official Chat📌
        </button>
      </div>
      <div className="w-full flex flex-col gap-2">
        <span className="text-sm ">สาขา รังสิตคลอง 4 (13.00 - 21.00 น.)</span>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d241.93483318299994!2d100.68694929038222!3d14.020543631120484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDAxJzE0LjAiTiAxMDDCsDQxJzEzLjYiRQ!5e0!3m2!1sen!2sth!4v1723230377251!5m2!1sen!2sth"
          width="300"
          height="300"
          loading="lazy"
          className="w-full rounded-3xl drop-shadow-md"
        />
        <button
          className="w-full text-sm text-center rounded-lg p-2  bg-green-500 text-white drop-shadow-md"
          onClick={sendLocation}
        >
          ส่งโลเคชั่นไปยัง Line Official Chat📌
        </button>
      </div>
    </main>
  );
}
