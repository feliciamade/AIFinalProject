import React from 'react';

//Styles
import styles from "./About.module.css";

//Components

import Layout from "../../components/Layout/Layout.jsx"; 
import ChatBubble from "../../components/ChatBubble/ChatBubble.jsx";

const Home =() => {
return(
<Layout>


<main >
  <div className={styles.content}>
  <div className={styles.left}>
     <h1>We started by <span className={styles.underlineText}>  listening. </span> </h1>
  </div>
  <div className={styles.right}>
  <ChatBubble />
  <ChatBubble />
  <ChatBubble /> 
  </div>
  </div>
<section className={styles.section}>
  <h2>
    “ We're rooted in finding you the best <span className={styles.greenText}>
      vegan, gluten-free, and dairy-free </span> options to revive your well-being.” </h2>
</section>
</main>
</Layout>
);
}

export default Home; 