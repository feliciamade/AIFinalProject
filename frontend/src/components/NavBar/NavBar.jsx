import React from 'react';
import styles from "./NavBar.module.css";
import Button from "../Button/Button.jsx"; 

function NavBar() {
  return (
    <nav className={styles.navBar} >
      <h2 className={styles.logo}>Root & Revive</h2>
      <div className={styles.pages}>
      <a href="/" className={styles.active}>Home</a>
      <a href="/restaurants">Restaurants</a>
      <a href="/Contact">Contact</a>
      <a href="/about">Mission</a>
      </div>    
      <Button name ="Ask Herb" />
    </nav>
  );
}

export default NavBar; 