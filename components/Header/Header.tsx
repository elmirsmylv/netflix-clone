import React from "react";

import styles from "./Header.module.scss";
import background from "../../public/background.jpg";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className={styles.logo}
        />
        <div className={styles.nav_right}>
          <select id="lang-switcher" className={styles.select}>
            <option value="en" selected>
              English
            </option>
            <option value="ru">Russian</option>
          </select>
          <button className={styles.button}>Sign In</button>
        </div>
      </nav>
      <div className={styles.content}>
        <div className={styles.img_wrapper}>
          <img
            className={styles.background_img}
            src="./background.jpg"
            alt="Netflix Background"
          />
          <div className={styles.img_gradient}></div>
        </div>
        <div className={styles.body}>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <span>
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>
          <div className={styles.input_section}>
            <input
              type="text"
              required
              autoComplete="off"
              placeholder="Email address"
            />
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
