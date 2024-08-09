"use client";
// import { useLiffProfile } from "@/app/context/LiffProvider.jsx";
import Header from "@/app/components/Ui/Header";
import Link from "next/link";

export default function FirstPage() {
  // const [success, profile, setProfile] = useLiffProfile();
  // let pageProfile = { ...profile };
  // Clone profile object

  return (
    <div className="border py-12 px-4 w-full min-h-screen flex flex-col gap-4 justify-start items-start">
      <Header status="Open" schedule="10:00 - 20:00" />
      {/* {success && (
        <>
          <h1>Testing Profile as a first page</h1>
          <p>Line username : {profile.displayName}</p>
          <p>Line userId: {profile.userId}</p>
          <div className="flex gap-2">
            <Link href="/basket" className="px-4 py-2 bg-black text-white">
              Basket
            </Link>
            <Link href="/adminPage" className="px-4 py-2 bg-black text-white">
              Admin
            </Link>
          </div>
        </>
      )} */}
    </div>
  );
}
