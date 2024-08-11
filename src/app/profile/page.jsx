"use client";
// import { useLiffProfile } from "@/app/context/LiffProvider.jsx";
import DetailsPopUp from "../components/Ui/DetailsPopUp";
import { BG } from "../menuInfo";

export default function FirstPage() {
  console.log(BG[0]);

  return <DetailsPopUp item={BG[0]} />;
}
