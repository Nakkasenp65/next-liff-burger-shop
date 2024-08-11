import CategoryItems from "../components/Ui/CategoryItems";
import BackButton from "../components/Ui/BackButton";
export default function Category() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-start py-12 px-3 gap-6">
      <BackButton />
      <CategoryItems />
    </main>
  );
}
