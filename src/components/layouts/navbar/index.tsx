import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.brand}>Navbar</div>
      <nav className={styles.navLinks}>
        <a href="/">Home</a>
        <a href="/produk">Produk</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default Navbar;