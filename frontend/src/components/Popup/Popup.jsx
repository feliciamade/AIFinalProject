// This is an example of a Popup component
import React from "react";
import styles from "./Popup.module.css";

function Popup({ onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Ask Herb</h2>
        <p>This is where your chat interface would go!</p>
      </div>
    </div>
  );
}

export default Popup;