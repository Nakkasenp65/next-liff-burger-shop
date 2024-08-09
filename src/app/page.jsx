import Header from "./components/Ui/Header";
import LinkItems from "./components/Ui/LinkItems";
import CategoryItems from "./components/Ui/CategoryItems";
export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-start py-12 px-3 gap-6">
      <Header />
      <LinkItems />
      <CategoryItems />
    </main>
  );
}
