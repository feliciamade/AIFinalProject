import React, { useState, useEffect, useRef } from "react";
import styles from './Chatbot.module.css';

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([
    { sender: "bot", message: "Hi there! How can I help you today?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const chatContainerRef = useRef();

  const backendUrl = "http://localhost:8000/ask";

  const handleSend = async () => {
    if (userInput.trim() === "") return;

    const newUserMessage = { sender: "user", message: userInput };
    setChatHistory((prev) => [...prev, newUserMessage]);

    setUserInput("");

    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log('Response data:', data); 

     
      if (Array.isArray(data)) {
        setChatHistory(data);
      } else {
        console.warn("Unexpected response format:", data);
        setChatHistory((prev) => [
          ...prev,
          { sender: "bot", message: "Unexpected response format." },
        ]);
      }
    } catch (error) {
      console.error("Error:", error);
      setChatHistory((prev) => [
        ...prev,
        { sender: "bot", message: "Sorry, there was an error." },
      ]);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  return (
    <div className={styles.chatbotPopup}>
      <div className={styles.chatHeader}>
        <h2 className={styles.logoText}>Herb</h2>
      </div>
      <div className={styles.chatBody} ref={chatContainerRef}>
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={
              msg.sender === "bot" ? styles.botMessage : styles.userMessage
            }
          >
            <p className={styles.messageText}>{msg.message}</p>
          </div>
        ))}
      </div>
      <div className={styles.chatForm}>
        <input
          className={styles.messageInput}
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button className={styles.chatFooterButton} onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;