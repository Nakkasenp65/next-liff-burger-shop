import Link from "next/link";
import styles from "./page.scss";
export default function Home() {
  return (
    <main className="container">
      <Link href={"/firstPage"}>เข้าสู่เว็บไซต์</Link>
    </main>
  );
}
