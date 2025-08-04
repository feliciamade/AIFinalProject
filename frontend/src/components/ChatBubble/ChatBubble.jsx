import React from 'react';
import styles from "./ChatBubble.module.css";

const ChatBubble = ({ name, color = '#ff7194', width ='200px', height ='100px', className }) => {
  const inlinestyles = {
    backgroundColor: color,
    color: 'white',
    width: width,
    height: height,
    padding: '18px 25px',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    textTransform: 'uppercase',
    fontSize: '15px',
    fontWeight: 500,
    marginTop: '10px',
    fontFamily: "Alexandria, sans-serif",
    position: 'relative',
  };

  return (
    <div style={inlinestyles} className={className}>
      <div className={styles.triangle}></div>
      {name}
    </div>
  );
};

export default ChatBubble;