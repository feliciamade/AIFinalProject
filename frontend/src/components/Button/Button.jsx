import React from 'react';
import styles from "./Button.module.css";

function Button({ name }) { 
    return (
        <button className={styles.mainButton}>{name}</button>
    )
}

export default Button;