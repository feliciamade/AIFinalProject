import React, { useState, useEffect } from "react";
import styles from "./Chatbot.module.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Chatbot = () => {

  const [query, setQuery] = useState("");

  async function askAssistant(){
  const body = {"message": query}
  const client = "http://localhost:5678/ask"

  const response = await fetch( client, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body)})
  const conversation =  await response.json()
  console.log(conversation)

  }

  function handleSubmit(event){
      event.preventDefault();
      askAssistant();
      setQuery("")
  }


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
          <form className={styles.chatForm} onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Message..." 
              className={styles.messageInput} 
              name="query"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
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