import styles from "./Chatbot.module.css";
import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ModalContent({ onClose }) {

      const [query, setQuery] = useState("");
      const [address, setAddress] = useState("")
      const [long, setLong] = useState("")
      const [lat, setLat] = useState("")
    
      async function askAssistant(){
      const body = {"message": query}
      if (address.length > 0){
        body.lat = lat
        body.long = long
      }
  
      const client = "http://localhost:5678/ask"
    
      const response = await fetch( client, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body)})
      const conversation =  await response.json()

      const parentNode = document.getElementById("chatBody")

      while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
        }
        let i = 0
        conversation.forEach(message => {
            let x = document.createElement('div');
            if (message.role === "assistant"){
                x.className = styles.botMessage;}
            else if (message.role === "user"){
                x.className = styles.userMessage;}
            else if (message.role === "system"){
                x.className = styles.botMessage;}
            x.id = `${i}`
            let y = document.createElement('p');
            y.className = styles.messageText;
            y.innerHTML = `${message.content}`;
            if (message.role === "system"){
                y.innerHTML = "Greetings 🌿, my name is Herb. How can I assist you?"};
            x.appendChild(y);
            parentNode.appendChild(x);
            i++
    })
        let target = conversation.length - 2
        target = `${target}`
        console.log(target)
        let lastChatMessage = document.getElementById(target)
        lastChatMessage.scrollIntoView({behavior:'smooth', block:'start'})

      }
    
      function handleSubmit(event){
          event.preventDefault();
          askAssistant();
          setQuery("")
      }
    
      function submitAddress(event){
        event.preventDefault()
        console.log(address)
        fetch(`https://api.mapbox.com/search/geocode/v6/forward?q=${address}&access_token=pk.eyJ1IjoiYXNtaXRoeHUiLCJhIjoiY21la3p3ZnR4MDNyNDJscTJ1OXkzMGJzaiJ9.MNlV8jif8DPWs_OYaxtf5w`)
        .then((response) => response.json())
        .then((json) => {
          let features = json.features[0]
          let coor = features.geometry.coordinates
          setLong(`${coor[0]}`)
          setLat(`${coor[1]}`)
        });
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
            <KeyboardArrowDownIcon className={styles.keyboardDown} onClick={onClose}/>
          </button>
        </div>
          <div>
            <form>
                <input 
                  type="text"
                  placeholder="Address" 
                  value={address}
                  name="name" 
                  onChange={(event) => setAddress(event.target.value)}
                />
                <button onClick={submitAddress}>
                  Button
                </button>
            </form>
          </div>

        {/* Chat Body */}
        <div className={styles.chatBody} id="chatBody">
          {/* Bot Message */}
          <div className={styles.botMessage}>
            <p className={styles.messageText}>
              Greetings 🌿, my name is Herb. How can I assist you?
            </p>
          </div>

          {/* User Message */}
          {/* <div className={styles.userMessage}>
            <p className={styles.messageText}>Where can I get a vegan burger?</p>
          </div> */}

          </div>

        {/* Chat Footer */}
        <div className={styles.chatFooter}>
          <form className={styles.chatForm}>
            <input 
                type="text" 
                placeholder="Message..." 
                className={styles.messageInput} 
                name="query"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                required 
            />
            <button className={styles.sendButton} onClick={handleSubmit}>
              <KeyboardArrowDownIcon className={styles.keyboardDown} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}