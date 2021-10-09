import type { NextPage } from "next";
import React, { useState } from "react";

import styles from "../styles/Login.module.scss";

const login: NextPage = () => {
  const [mode, setMode] = useState("login");

  return (
    <div className={styles.container}>
      <div className={styles.background_wrapper}>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9b3267c9-5086-4550-92f1-eddc22a1f78e/d9c10aaf-ea9a-41d3-8f12-6ffd97ad10f3/AZ-en-20211004-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <div className={styles.header}>
        <a href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            className={styles.logo}
          />
        </a>
      </div>
      <div className={styles.body}>
        <div className={styles.login_container}>
          {mode === "login" ? <h3>Sign In</h3> : <h3>Sign Up</h3>}
          <div className={styles.input_section}>
            <div className={styles.input_data}>
              <input type="text" required />
              <label>Email or phone number</label>
            </div>
            <div className={styles.input_data}>
              <input type="password" required />
              <label>Passsword</label>
            </div>
          </div>
          <div className={styles.button_section}>
            <button>{mode === "login" ? <>Sign In</> : <>Sign Up</>}</button>
          </div>
          <div className={styles.remember_section}>
            <div className={styles.remember}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
          <div className={styles.facebook}>
            <img
              src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
              className={styles.logo}
            ></img>
            <p>
              {mode === "login" ? (
                <>Login with Facebook</>
              ) : (
                <>Sign up with Facebook</>
              )}
            </p>
          </div>
          <div className={styles.change_mode}>
            {mode === "login" ? (
              <>
                <p>New to Netflix? </p>
                <a href="#" onClick={() => setMode("register")}>
                  Sign up now.
                </a>
              </>
            ) : (
              <>
                <p>Have an account? </p>
                <a href="#" onClick={() => setMode("login")}>
                  Sign in now.
                </a>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.footer}>
        <div className={styles.content}>
          <h4>Questions? Contact us.</h4>
          <div className={styles.links}>
            <div className={styles.link_item}>
              <a href="#">FAQ</a>
            </div>
            <div className={styles.link_item}>
              <a href="#">Help Center</a>
            </div>
            <div className={styles.link_item}>
              <a href="#">Terms of Use</a>
            </div>
            <div className={styles.link_item}>
              <a href="#">Privacy</a>
            </div>
            <div className={styles.link_item}>
              <a href="#">Cookie Preferences</a>
            </div>
            <div className={styles.link_item}>
              <a href="#">Corporate Information</a>
            </div>
          </div>
          <div className={styles.select_section}>
            <select id="lang-switcher" className={styles.select}>
              <option value="en" selected>
                English
              </option>
              <option value="ru">Russian</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
