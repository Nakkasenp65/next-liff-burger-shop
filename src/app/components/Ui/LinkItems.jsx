import LinkItem from "./LinkItem";
import LinemanButton from "./LinemanButton";
export default function LinkItems() {
  return (
    <section className="bg-lightGreyBackground w-full flex gap-4 px-3 py-4 rounded-lg shadow-md">
      <LinemanButton />
      <LinkItem
        imageIcon={"/location.png"}
        text={"ที่อยู่ร้าน"}
        link={"/location"}
      />
    </section>
  );
}
