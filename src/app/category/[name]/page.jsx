"use client";
import Header from "@/app/components/Ui/Header";
import { useParams } from "next/navigation";
import MenuItem from "@/app/components/Ui/MenuItem";
import { BURGER } from "@/app/menuInfo";

export default function Category() {
  const { name } = useParams();
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-start py-12 px-3 gap-6">
      <Header />
      <span className="text-lg">หมวดหมู่ เบอเกอร์</span>
      <section className="w-full flex flex-wrap justify-around items-start gap-4">
        <MenuItem
          menuName={"hamburger"}
          menuDetails={"hamburger bro"}
          menuPrice={"190.-"}
        />
      </section>
    </main>
  );
}
