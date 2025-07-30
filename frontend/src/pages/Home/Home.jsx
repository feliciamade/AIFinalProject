import React from 'react';
import styles from "./Home.module.css";
import Button from "../../components/Button/Button.jsx";
import Layout from "../../components/Layout/Layout.jsx"; 
import ratishImage from '../../assets/ratish.png';

const Home =() => {
return(
<Layout>

<main className={styles.main}>
  <div className={styles.content}>
  <div className={styles.left}>
     <h1>From <span className={styles.greenText}>local</span> roots to fresh starts</h1>
    <p> Connecting you to the freshest
    local produce, crafted into vibrant meals. </p>
    <Button name ="Learn More" />
  </div>
  <div className={styles.right}>
    <img src={ratishImage} alt="a ratish" />
  </div>
  </div>
</main>

</Layout>
);
}

export default Home; 