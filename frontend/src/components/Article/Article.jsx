import React from 'react';
import styles from "./Article.module.css";

function Article({ description}) { 
    return (
        <article className={styles.Article}>
            <p>{description}</p>
        </article>
    )
}

export default Article;