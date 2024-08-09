import CategoryItem from "./CategoryItem";

export default function CategoryItems() {
  const locate = "category/";
  return (
    <>
      <span className="text-lg">หมวดหมู่</span>
      <section className="w-full flex flex-wrap justify-around items-start gap-4">
        <CategoryItem
          href={`${locate}burger`}
          imageName="burger"
          displayName="Burger"
        />
        <CategoryItem
          href={`${locate}hamBurger`}
          imageName="hamBurger"
          displayName="Double Burger"
        />
        <CategoryItem
          href={`${locate}comboSet`}
          imageName="comboSet"
          displayName="ชุด Combo Set"
        />
        <CategoryItem
          href={`${locate}hotDog`}
          imageName="hotDog"
          displayName="Hot Dog"
        />
        <CategoryItem
          href={`${locate}sandwich`}
          imageName="sandwich"
          displayName="Sandwich"
        />
        <CategoryItem
          href={`${locate}sideDish`}
          imageName="sideDish"
          displayName="เมนูทานเล่น"
        />
        <CategoryItem
          href={`${locate}rice`}
          imageName="rice"
          displayName="เมนูข้าว"
        />
      </section>
    </>
  );
}
