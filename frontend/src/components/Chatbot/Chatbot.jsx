import React, { useState, useEffect, useRef } from "react";
import styles from './Chatbot.module.css';
import api from "../../api";

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([
    { sender: "bot", message: "Hi there! How can I help you today?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
  const chatContainerRef = useRef();

  const handleSend = async () => {
    if (userInput.trim() === "" || isLoading) return;

    const newUserMessage = { sender: "user", message: userInput };
    setChatHistory((prev) => [...prev, newUserMessage]);
    setUserInput("");
    setIsLoading(true);

    try {
      const response = await api.post("/ask", { message: userInput });
      const data = response.data;
      console.log('Response data:', data);

      if (Array.isArray(data)) {
        setChatHistory((prev) => [...prev, ...data]);
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
    } finally {
      setIsLoading(false);
    }
  };

  // Scroll to bottom when chat history updates
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  // Handle pressing Enter key to send message
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

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
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        <button
          className={styles.chatFooterButton}
          onClick={handleSend}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;