import React from 'react';
import styles from './Header.module.css';

function Header({ user, onLogin }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        🎣 FishVault
      </div>
      <div className={styles.rightSection}>
        <button className={styles.githubLink} onClick={() => window.open("https://github.com/Ikuchar1", "_blank")}>
          GitHub
        </button>
        
        <button 
          className={styles.loginButton}
          onClick={onLogin}
        >
          {/* if user is logged in show their name, otherwise show login */}
          {user ? user.name : 'Login'}
        </button>
      </div>
    </header>
  );
}

export default Header;