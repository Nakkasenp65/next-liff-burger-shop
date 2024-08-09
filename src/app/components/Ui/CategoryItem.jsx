import Image from "next/image";
import Link from "next/link";
export default function CategoryItem({ imageName, displayName, href }) {
  return (
    <>
      <Link
        href={`/${href}`}
        className="flex flex-grow w-40 h-40 flex-col justify-center items-center gap-2 bg-lightGreyBackground rounded-lg"
      >
        <Image
          src={`/${imageName}.png`}
          alt={`image-icon-${imageName}`}
          width={56}
          height={56}
          priority
        />
        <p className="text-sm">{displayName}</p>
      </Link>
    </>
  );
}
