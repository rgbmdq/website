import styles from "./header.module.scss";

export default function Header() {
  return (
    <nav className={styles.header}>
      <a href="#" className="text-xl underline"> Home </a>
      <a href="#" className="text-xl underline"> About me </a>
      <a href="#" className="text-xl underline"> Blog </a>
      <a href="#" className="text-xl underline"> EN/ES </a>
    </nav>
  );
}
