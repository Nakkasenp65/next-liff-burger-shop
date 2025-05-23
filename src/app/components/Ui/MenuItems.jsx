import MenuItem from "./MenuItem";
import Header from "./Header";
import BackButton from "./BackButton";
import { BG, DB, HD, RICE, SD, SET, SW } from "../../menuInfo";

const categories = {
  burger: { title: "หมวดหมู่ เบอเกอร์", data: BG },
  comboSet: { title: "หมวดหมู่ ชุดเซ็ทเบอร์เกอร์", data: SET },
  hamBurger: { title: "หมวดหมู่ ดับเบิล เบอร์เกอร์", data: DB },
  hotDog: { title: "หมวดหมู่ Hot Dog", data: HD },
  sandwich: { title: "หมวดหมู่ Sandwich", data: SW },
  sideDish: { title: "หมวดหมู่ เมนูทานเล่น", data: SD },
  rice: { title: "หมวดหมู่ เมนูข้าว", data: RICE },
};

export default function MenuItems({ paramsName, handlePopup }) {
  const category = categories[paramsName];

  if (!category) return null; // Handle unknown categories

  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-start py-12 px-4 gap-6">
      <Header />
      <span className="text-lg flex gap-2">
        <BackButton />
        {category.title}
      </span>
      <section
        className="w-full grid gap-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        }}
      >
        {category.data.map((item) => (
          <div key={item.name}>
            <MenuItem item={item} handlePopup={() => handlePopup(item)} />
          </div>
        ))}
      </section>
    </main>
  );
}
