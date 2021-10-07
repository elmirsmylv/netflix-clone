import React from "react";

import styles from "./Section.module.scss";

interface Section2Props {
  photoUrl: string;
}

const Section2: React.FC<Section2Props> = ({ photoUrl }) => {
  return (
    <>
      <div className={styles.divider} />
      <div className={`${styles.container} ${styles.section2_container}`}>
        <div className={styles.title_section}>
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favorites easily and always have something to watch.
          </h2>
        </div>
        <div className={styles.section2_animation_container}>
          <img src={photoUrl} />
        </div>
      </div>
    </>
  );
};

export default Section2;
