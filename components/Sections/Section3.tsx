import React from "react";

import styles from "./Section.module.scss";

const Section3 = () => {
  return (
    <>
      <div className={styles.divider} />
      <div className={`${styles.container} ${styles.section3_container}`}>
        <div className={styles.title_section}>
          <h1>Watch everywhere.</h1>
          <h2>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </h2>
        </div>
        <div className={styles.section3_animation_container}>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" />

          <div className={styles.card_video}>
            <video autoPlay playsInline muted loop>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
