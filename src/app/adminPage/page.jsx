"use client";
import { db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useShopSchedule } from "../context/ShopScheduleProvider";
import Header from "../components/Ui/Header";

export default function AdminPage() {
  const [schedule, setSchedule] = useShopSchedule();

  const updateSchedule = async () => {
    if (schedule.open === "" || schedule.close === "") {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }
    if (schedule.open.split(":")[0] > schedule.close.split(":")[0]) {
      alert("Warning: \nเวลาเปิดน้อยกว่าเวลาปิด");
      return;
    }
    const userRef = doc(db, "schedule", "7uL2IDJlBKjHE3TmGHFe");
    try {
      await setDoc(userRef, schedule, {
        merge: true,
      });
      alert("บันทึกข้อมูลเรียบร้อย");
    } catch (error) {
      console.error("error", error);
    }
  };

  const handleChange = (e) => {
    setSchedule({ ...schedule, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await updateSchedule();
    if (added) {
      alert("บันทึกข้อมูลเรียบร้อย");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col px-3 py-12 gap-6 justify-start">
      <Header schedule={"test"} status={"เปิด"} />
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="w-full flex flex-col p-4 gap-2 rounded-xl bg-zinc-100">
          <label>เวลาเปิด:</label>
          <input
            type="time"
            name="open"
            value={schedule.open}
            className="border border-zinc-400 rounded-xl px-4 py-1"
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col p-4 gap-2 rounded-xl bg-zinc-100">
          <label>เวลาปิด:</label>
          <input
            type="time"
            name="close"
            className="border border-zinc-400 rounded-xl px-4 py-1"
            value={schedule.close}
            onChange={handleChange}
          />
        </div>

        <button
          className="px-4 py-2 bg-black text-white rounded-xl"
          type="submit"
        >
          บันทึก
        </button>
      </form>
    </div>
  );
}
