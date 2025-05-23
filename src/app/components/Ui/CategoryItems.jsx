import CategoryItem from "./CategoryItem";

export default function CategoryItems() {
  const categories = [
    { href: "category/burger", imageName: "burger", displayName: "Burger" },
    {
      href: "category/hamBurger",
      imageName: "hamBurger",
      displayName: "Double Burger",
    },
    {
      href: "category/comboSet",
      imageName: "comboSet",
      displayName: "ชุด Combo Set",
    },
    { href: "category/hotDog", imageName: "hotDog", displayName: "Hot Dog" },
    {
      href: "category/sandwich",
      imageName: "sandwich",
      displayName: "Sandwich",
    },
    {
      href: "category/sideDish",
      imageName: "sideDish",
      displayName: "เมนูทานเล่น",
    },
    { href: "category/rice", imageName: "rice", displayName: "เมนูข้าว" },
  ];

  const locate = "category/";
  return (
    <>
      <span className="text-lg">หมวดหมู่</span>
      <section className="w-full flex flex-wrap justify-around items-start gap-4">
        {categories.map((category, index) => (
          <CategoryItem
            key={index} // Always include a unique key when using map function
            href={category.href}
            imageName={category.imageName}
            displayName={category.displayName}
          />
        ))}
      </section>
    </>
  );
}
