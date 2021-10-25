import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://occ-0-6194-3467.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYkCkU1IxvqYm3FG3KbCURrLXBGKxyD7pUVlzRXQtsfLpQIiSxqccDwKe_zNPeorVSiIyIFWrfPiPrTZQJV1NP6zUnKz.webp?r=5eb"
        alt=""
      />

      <div className={styles.info}>
        <img
          src="https://occ-0-6194-3467.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQZyJOOeYLpY8mQisGk4jp95ldIeMnxsGC5il37EFJoyX77UsGzpzlTLzQNtHusi8v4OYqGLxSUB3t2uoL8qCqFOex4hUF83gWdp4sB8jIHnXgjyeUMf4g2X1_9FKhgkKkodcWANRHMmub-Fjs0OD6G7gVX1pWWuBYKL4mLOIerXhw.webp?r=ab8"
          alt=""
        />
        <span className={styles.desc}>
          Following her father's murder, a revenge-driven woman puts her trust
          in a powerful crime boss — and enters the police force under his
          direction.
        </span>
        <div className={styles.buttons}>
          <button className={styles.play}>
            <BsFillPlayFill size={20} />
            <span>Play</span>
          </button>
          <button className={styles.more}>
            <AiOutlineInfoCircle size={20} />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
