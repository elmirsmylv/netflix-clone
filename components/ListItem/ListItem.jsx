import React from "react";

import styles from "./ListItem.module.scss";

const ListItem = ({data}) => {

    let imgEndpoint = "https://image.tmdb.org/t/p/original"


  return (
    <div className={styles.container}>
        {
            data && (
                <img src={imgEndpoint+data.backdrop_path} alt={data.original_title} className={styles.image} />
            )
        }
    </div>
  );
};

export default ListItem;
