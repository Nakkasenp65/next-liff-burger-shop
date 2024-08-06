"use client";
import { useEffect } from "react";
import { useBasket } from "../context/BasketProvider";
import styles from "./firstPage.scss";
import Header from "@/app/components/header/Header";
import Link from "next/link";
const liffId = process.env.NEXT_PUBLIC_LIFF_ID;

const initLiff = async () => {
  let liff = (await import("@line/liff")).default;
  try {
    await liff.init({ liffId });
    if (!liff.isLoggedIn()) {
      console.log("liff login required", liff);
      liff.login();
    } else {
      console.log("liff init success in Profile", liff);
    }
  } catch (error) {
    console.error("liff init error", error.message);
  }
};

export default function Profile() {
  const [basket, setBasket] = useBasket();
  let testBasket = basket;

  // useEffect(() => {
  //   initLiff();
  // }, []);

  return (
    <div>
      <Header status="Open" schedule="10:00 - 20:00" />
      <button
        onClick={() => {
          testBasket.push("Data");
          setBasket(testBasket);
          console.log(basket);
        }}
      >
        Add Data
      </button>
      <Link href={"/basket"}>Basket</Link>
    </div>
  );
}
