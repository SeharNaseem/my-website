import styles from '../styles/Header.module.css';
import Link from "next/link";


const Header = () => {
  return (
    <header className={styles.header}>
      <h1>My Website</h1>
      <nav>
        <ul className={styles.navList}>
        <li><Link href="/home" target='_blank'>Home</Link></li>
        <li><Link href="/contact" target='_blank'>Contact Us</Link></li>
          <li><Link href="/about" target='_blank'>About </Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
