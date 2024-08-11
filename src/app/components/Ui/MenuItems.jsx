import MenuItem from "./MenuItem";
import Header from "./Header";
import BackButton from "./BackButton";
import { BG, DB, HD, RICE, SD, SET, SW } from "../../menuInfo";
export default function MenuItems({ paramsName, handlePopup }) {
  switch (paramsName) {
    case "burger":
      return (
        <main className="w-full min-h-screen flex flex-col justify-start items-start py-12 px-4 gap-6">
          <Header />
          <span className="text-lg flex gap-2">
            <BackButton />
            หมวดหมู่ เบอเกอร์
          </span>
          <section className="w-full flex flex-wrap justify-around items-start gap-2">
            {BG.map((item) => (
              <div key={item.name}>
                <MenuItem item={item} handlePopup={() => handlePopup(item)} />
              </div>
            ))}
          </section>
        </main>
      );
    case "comboSet":
      return (
        <main className="w-full min-h-screen flex flex-col justify-start items-start py-12 px-4 gap-6">
          <Header />
          <span className="text-lg flex gap-2">
            <BackButton />
            หมวดหมู่ ชุดเซ็ทเบอร์เกอร์
          </span>
          <section className="w-full flex flex-wrap justify-around items-start gap-2">
            {SET.map((item) => (
              <div key={item.name}>
                <MenuItem item={item} handlePopup={() => handlePopup(item)} />
              </div>
            ))}
          </section>
        </main>
      );
    case "hamBurger":
      return (
        <main className="w-full min-h-screen flex flex-col justify-start items-start py-12 px-4 gap-6">
          <Header />
          <span className="text-lg flex gap-2">
            <BackButton />
            หมวดหมู่ ดับเบิล เบอร์เกอร์
          </span>
          <section className="w-full flex flex-wrap justify-around items-start gap-2">
            {DB.map((item) => (
              <div key={item.name}>
                <MenuItem item={item} handlePopup={() => handlePopup(item)} />
              </div>
            ))}
          </section>
        </main>
      );
    case "hotDog":
      return (
        <main className="w-full min-h-screen flex flex-col justify-start items-start py-12 px-4 gap-6">
          <Header />
          <span className="text-lg flex gap-2">
            <BackButton />
            หมวดหมู่ Hot Dog
          </span>
          <section className="w-full flex flex-wrap justify-around items-start gap-2">
            {HD.map((item) => (
              <div key={item.name}>
                <MenuItem item={item} handlePopup={() => handlePopup(item)} />
              </div>
            ))}
          </section>
        </main>
      );
    case "sandwich":
      return (
        <main className="w-full min-h-screen flex flex-col justify-start items-start py-12 px-4 gap-6">
          <Header />
          <span className="text-lg flex gap-2">
            <BackButton />
            หมวดหมู่ Sandwich
          </span>
          <section className="w-full flex flex-wrap justify-around items-start gap-2">
            {SW.map((item) => (
              <div key={item.name}>
                <MenuItem item={item} handlePopup={() => handlePopup(item)} />
              </div>
            ))}
          </section>
        </main>
      );
    case "sideDish":
      return (
        <main className="w-full min-h-screen flex flex-col justify-start items-start py-12 px-4 gap-6">
          <Header />
          <span className="text-lg flex gap-2">
            <BackButton />
            หมวดหมู่ เมนูทานเล่น
          </span>
          <section className="w-full flex flex-wrap justify-around items-start gap-2">
            {SD.map((item) => (
              <div key={item.name}>
                <MenuItem item={item} handlePopup={() => handlePopup(item)} />
              </div>
            ))}
          </section>
        </main>
      );
    case "rice":
      return (
        <main className="w-full min-h-screen flex flex-col justify-start items-start py-12 px-4 gap-6">
          <Header />
          <span className="text-lg flex gap-2">
            <BackButton />
            หมวดหมู่ เมนูข้าว
          </span>
          <section className="w-full flex flex-wrap justify-around items-start gap-2">
            {RICE.map((item) => (
              <div key={item.name}>
                <MenuItem item={item} handlePopup={() => handlePopup(item)} />
              </div>
            ))}
          </section>
        </main>
      );
  }
}
