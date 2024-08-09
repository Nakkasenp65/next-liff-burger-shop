"use client";
import { useLiffProfile } from "@/app/context/LiffProvider";
import LoadingComponent from "./loadingComponent/LoadingComponent";
export default function LoadingProvider({ children }) {
  const [success, profile, setProfile] = useLiffProfile();
  return <div>{success ? <>{children}</> : <LoadingComponent />}</div>;
}
