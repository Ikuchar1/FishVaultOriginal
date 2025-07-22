import React from 'react';
import styles from './Header.module.css';

function Header({ user, onLogin }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        🎣 FishVault
      </div>
      <button 
        className={styles.loginButton}
        onClick={onLogin}
      >
        {user ? 'Dashboard' : 'Login'}
      </button>
    </header>
  );
}

export default Header;