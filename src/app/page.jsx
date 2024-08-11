"use client";
import Header from "./components/Ui/Header";
import LinkItems from "./components/Ui/LinkItems";
import { AnimatePresence } from "framer-motion";
import Warning from "./components/Ui/Warning";
import CategoryItems from "./components/Ui/CategoryItems";
import { useEffect, useState } from "react";

export default function Home() {
  const [popup, setPopup] = useState(true);

  return (
    <main className="relative w-full min-h-screen flex flex-col justify-start items-start py-6 px-4 gap-6">
      <AnimatePresence>
        {popup && <Warning setPopup={setPopup} />}
      </AnimatePresence>
      <Header />
      <LinkItems />
      <CategoryItems />
    </main>
  );
}
