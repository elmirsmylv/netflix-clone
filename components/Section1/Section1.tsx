import React from "react";

import styles from "./Section1.module.scss";

interface Section1Props {
  photo: string;
  title: string;
  video: string;
  description: string;
}

//{ svg, video, title, description }: Section1Props

const Section1 = ({ photo, video, title, description }: Section1Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.title_section}>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
      <div className={styles.animation_container}>
        <img src={photo} />

        <div className={styles.card_video}>
          <video autoPlay playsInline muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Section1;
