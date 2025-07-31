import React from 'react';
import styles from "./Home.module.css";
/*import Popup from "../../components/Popup/Popup.jsx";*/
import Button from "../../components/Button/Button.jsx";
import Layout from "../../components/Layout/Layout.jsx"; 
import ratishImage from '../../assets/ratish.png';

const Home =() => {
return(
<Layout>

{/*<Popup />*/}
<main >
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
<section className={styles.section}>
  <h2>
    “ We're rooted in finding you the best <span className={styles.greenText}>
      vegan, gluten-free, and dairy-free </span> options to revive your well-being.” </h2>
</section>

<div className={styles.reccomendations}>
  <article></article>
</div>

</main>
</Layout>
);
}

export default Home; 