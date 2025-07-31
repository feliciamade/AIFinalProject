import react from 'react';
import styles from "./Popup.module.css";
import Button from "../../components/Button/Button.jsx";


function Popup() { 
    return (
       <div className={styles.Popup}>
        <h1>Ready to Eat Local? Find Restaurants Near You!</h1>
        <p>Explore our curated list of restaurants that
         proudly feature local Root & Revive produce in their dishes</p>
        <Button name ="Learn More" />
       </div> 
    )
}

export default Popup;