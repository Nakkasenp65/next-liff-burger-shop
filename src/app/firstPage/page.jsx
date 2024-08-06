"use client";
import { useLiffProfile } from "../context/LiffProvider";
import { liff } from "@line/liff";
import styles from "./firstPage.scss";
import Header from "@/app/components/header/Header";
import Link from "next/link";

export default function FirstPage() {
  const [success, profile, setProfile] = useLiffProfile();

  return (
    <div className="container">
      <Header status="Open" schedule="10:00 - 20:00" />
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
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
      {success ? (
        <>
          <p>Line username : {profile.displayName}</p>
          <p>Line userId: {profile.userId}</p>
        </>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
