import Image from "next/image";
export default function LoadingComponent() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center gap-2">
        <Image
          href={"/cooking.gif"}
          width={200}
          height={200}
          alt="cooking image"
        />
        <p>⏳กำลังเตรียมการ...</p>
      </div>
    </>
  );
}
