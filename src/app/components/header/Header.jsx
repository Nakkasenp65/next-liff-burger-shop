import styles from "./header.scss";
export default function Header({ status, schedule }) {
  return (
    <>
      <div className="header">
        //
        <span className="name">Unique Burger</span>
        <span className="status">{status}</span>
        <span className="status">{schedule}</span>
        //
      </div>
    </>
  );
}
