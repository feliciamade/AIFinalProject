import React from 'react';
import styles from "./Article.module.css";


// This component renders an article with a description
// It receives a 'description' prop and displays it inside a paragraph element


function Article({ description}) { 
    return (
        < div className={styles.ArticleContainer}>
        <article className={styles.Article}>
    <p>{description}</p></article> 
        </div>
    )
};

export default Article;