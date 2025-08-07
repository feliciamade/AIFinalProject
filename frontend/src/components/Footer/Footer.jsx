import react from 'react';
import styles from "./Footer.module.css";



function Footer() { 
    return (
        <footer>

        <div className={styles.Footer}>
        <h3>Root & Revive</h3>
        <div className={styles.Navigation}>
            <a href="/">Home</a>
            <a href="/restaurants">Restaurants</a>
            <a href="/Contact">Contact</a>
            <a href="/about">About Us</a>
        </div>
        <div className={styles.Contact}>
            <p>Email</p>
            <p>Phone</p>
            <p>Address</p>
            <p>Contact</p>
        </div>
        <div className={styles.Legal}>
             <a href="/">Privacy</a>
            <a href="#">Terms of Service/Use</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Copyright Notice</a>
        </div>
       </div> 

        </footer>
       
    )
}

export default Footer;