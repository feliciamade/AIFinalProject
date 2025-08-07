import React from 'react';
import styles from "./NavBar.module.css";
import Button from "../Button/Button.jsx"; 

function NavBar() {
  return (
    <nav className={styles.navBar} >
      <h3 className={styles.logo}>Root & Revive</h3>
      <div className={styles.pages}>
      <a href="/" className={styles.active}>Home</a>
      <a href="/restaurant">Restaurant</a>
      <a href="/Contact">Contact</a>
      <a href="/about">Mission</a>
      </div>    
      <Button name ="Ask Herb" />
    </nav>
  );
}

export default NavBar; 