import Link from "next/link";
import CategoryItems from "../components/Ui/CategoryItems";
export default function Category() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-start py-12 px-3 gap-6">
      <Link
        className="text-lg px-2 py-1 rounded-xl bg-green-500 text-white drop-shadow-md"
        href="/"
      >
        กลับ
      </Link>
      <CategoryItems />
    </main>
  );
}
