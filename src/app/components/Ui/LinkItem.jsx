import Link from "next/link";
import Image from "next/image";
export default function LinkItem({ imageIcon, text, link }) {
  return (
    <>
      <Link
        href={link}
        className="w-full flex flex-col items-center justify-center gap-2 p-2 rounded-lg bg-white"
      >
        <Image
          src={imageIcon}
          width={56}
          height={56}
          alt="Image Icon"
          priority
        />
        <span className="text-center">{text}</span>
      </Link>
    </>
  );
}
