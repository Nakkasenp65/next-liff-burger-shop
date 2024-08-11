"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import DetailsPopUp from "@/app/components/Ui/DetailsPopUp";
import MenuItems from "@/app/components/Ui/MenuItems";

export default function Category() {
  const [isPop, setIsPop] = useState(false);
  const [popItem, setPopItem] = useState({});
  const { name } = useParams();

  function handlePopup(item = {}) {
    console.log("item:", item, "clicked!");
    setPopItem(item);
    setIsPop(!isPop);
  }

  if (isPop) {
    return <DetailsPopUp item={popItem} handlePopup={handlePopup} />;
  } else {
    return <MenuItems paramsName={name} handlePopup={handlePopup} />;
  }
}
