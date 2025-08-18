import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Button from "../Button/Button.jsx";
import Popup from "../Popup/Popup.jsx";
import PortalExample from './PortalExample';


function NavBar() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatButtonClick = () => {
    setIsChatOpen(true);
  };

  const handleClosePopup = () => {
    setIsChatOpen(false);
  };

  return (
    <nav className={styles.navBar}>
      <h3 className={styles.logo}>Root & Revive</h3>
      <div className={styles.pages}>
        <a href="/" className={styles.active}>Home</a>
        <a href="/restaurant">Restaurant</a>
        <a href="/Contact">Contact</a>
        <a href="/about">Mission</a>
      </div>
      {/* <Button name="Ask Herb" onClick={handleChatButtonClick} /> */}
      <PortalExample/>
        
      {isChatOpen && <Popup onClose={handleClosePopup} />}
    </nav>
  );
}

export default NavBar;