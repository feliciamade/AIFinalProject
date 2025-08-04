import React, { useState } from 'react';
import styles from "./Popup.module.css";
import Button from "../../components/Button/Button.jsx";

function Popup() {
    
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  return (
    <> 
      {isVisible && ( 
        <div className={styles.Popup}>
          <button onClick={handleCloseClick} className={styles.closeButtonStyle}>
            X
          </button>
          <h1>Dine Out, Worry-Free!</h1>
          <p>
           Tell us your dietary needs, and we'll find 
           the perfect restaurants near you. Vegan? 
           Gluten-Free? Dairy-Free? We've got you covered!
          </p>
          <Button name="Learn More" />
        </div>
      )}
    </>
  );
}

export default Popup;