import React from "react";

import styles from "./Section.module.scss";

const Section1 = () => {
  return (
    <>
      <div className={styles.divider} />
      <div className={styles.container}>
        <div className={styles.title_section}>
          <h1>Enjoy on your TV.</h1>
          <h2>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </div>
        <div className={styles.section1_animation_container}>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />

          <div className={styles.card_video}>
            <video autoPlay playsInline muted loop>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
