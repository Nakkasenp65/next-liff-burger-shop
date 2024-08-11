"use client";
import { useLiff } from "@/app/context/LiffProvider";
import LoadingComponent from "./loadingComponent/LoadingComponent";
export default function LoadingProvider({ children }) {
  const [success, readyLiff] = useLiff();
  return <div>{success ? <>{children}</> : <LoadingComponent />}</div>;
}
