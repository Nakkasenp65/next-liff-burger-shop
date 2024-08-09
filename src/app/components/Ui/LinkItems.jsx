import LinkItem from "./LinkItem";
export default function LinkItems() {
  return (
    <section className="bg-lightGreyBackground w-full flex gap-4 px-2 py-4 rounded-lg shadow-md">
      <LinkItem
        imageIcon={"/lineman.png"}
        text={"สั่งเลย"}
        link={"https://lin.ee/fUyorbV"}
      />
      <LinkItem
        imageIcon={"/location.png"}
        text={"ที่อยู่ร้าน"}
        link={"/location"}
      />
    </section>
  );
}
