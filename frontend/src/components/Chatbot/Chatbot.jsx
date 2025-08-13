import React from 'react';
import styles from "./Chatbot.module.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Chatbot = () => {
  return (
    <div className={styles.container}>
      {/* Main Chatbot Popup */}
      <div className={styles.chatbotPopup}>

        {/* Chatbot Header */}
        <div className={styles.chatHeader}>
          <div className={styles.headerInfo}>
            <h2 className={styles.logoText}>Herb</h2>
          </div>
          <button className={styles.iconButton}>
            <KeyboardArrowDownIcon className={styles.keyboardDown} />
          </button>
        </div>

        {/* Chat Body */}
        <div className={styles.chatBody}>

          {/* Bot Message */}
          <div className={styles.botMessage}>
            <p className={styles.messageText}>
              Greetings 🌿, my name is Herb. How can I assit you?
            </p>
          </div>

          {/* User Message */}
          <div className={styles.userMessage}>
            <p className={styles.messageText}>Can you help me find vegan resturants in Memphis ?</p>
          </div>

          </div>

        {/* Chat Footer */}
        <div className={styles.chatFooter}>
          <form className={styles.chatForm} action="#">
            <input 
              type="text" 
              placeholder="Message..." 
              className={styles.messageInput} 
              required 
            />
            <button className={styles.sendButton}>
              <KeyboardArrowDownIcon className={styles.keyboardDown} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Chatbot;