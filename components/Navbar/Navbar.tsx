import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { useRouter } from "next/router";

import firebaseClient from "../../firebase/client";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const router = useRouter();

  const logout = () => {
    firebaseClient.auth().signOut();
    router.push("/login-or-register");
  };

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);

    return () => (window.onscroll = null);
  };

  return (
    <div
      className={
        isScrolled ? `${styles.container} ${styles.scrolled}` : styles.container
      }
    >
      <div className={styles.logo_wrapper}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className={styles.logo}
        />
      </div>
      <div className={styles.links_mobile}>
        <div className={styles.browse_section}>
          <div
            className={styles.browse_section_toggle}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <span>Browse</span>
            <AiFillCaretDown size={13} className={styles.down_arrow} />
          </div>
          <div
            className={
              showMobileMenu
                ? styles.links_container_active
                : styles.links_container_deactive
            }
          >
            <div className={styles.links_container_top}>
              <AiFillCaretUp className={styles.up_arrow} />
              <div className={styles.divider} />
            </div>
            <div className={styles.links}>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">TV Shows</a>
                </li>
                <li>
                  <a href="#">Movies</a>
                </li>
                <li>
                  <a href="#">Latest</a>
                </li>
                <li>
                  <a href="#">My List</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.links_desktop}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">TV Shows</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Latest</a>
          </li>
          <li>
            <a href="#">My List</a>
          </li>
        </ul>
      </div>

      <div className={styles.navbar_right}>
        <FaBell className={styles.bell} />
        <div className={styles.avatar_section}>
          <div className={styles.avatar_wrapper}>
            <img
              src="https://occ-0-6194-3467.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYnnca7HCf0z4YHtIK5R8MIGCeMyodAsxBYSBmMkYHqjSw46VWWyNQirfwxT-CkbxPkp-G84Wu-iOMwGG-r9QAs.png?r=f71"
              alt=""
            />
            <AiFillCaretDown className={styles.avatar_arrow} />
          </div>

          <div className={styles.content_wrapper}>
            <AiFillCaretUp className={styles.up_arrow} />
            <div className={styles.content}>
              <div className={styles.profiles}>
                <div className={styles.profile}>
                  <img
                    src="https://occ-0-6194-3467.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFGRrM4HbIxapywLTqwdF1olF9-pChoiFHNZnKmiJ7Eh7nS2tD0CxlLEU30kksXnnhvei2oHVoYCSdIhlHra9DR7A6g.png?r=893"
                    alt=""
                  />
                  <a>Ted Mosby</a>
                </div>
                <div className={styles.profile}>
                  <img
                    src="https://occ-0-6194-3467.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFEu5enq3eLItVu6BAszu2UEW6nptIZsBTgAP61_xhmw-AGyLTRpD-7cW0N-ZAMRwO4M9fj_2nRi4UY3ls8AQClwBaw.png?r=f56"
                    alt=""
                  />
                  <a>Lily Aldrin</a>
                </div>
                <div className={styles.profile}>
                  <img
                    src="https://occ-0-6194-3467.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFFMGlmB_dGTnV9qFpG9q3jtrwQdDe2voICZozEod0wA4hX4h_3a6kFv0h3dPVPiNa4vksVNjGrHDk2RwkJ6X5qmsnQ.png?r=6c5"
                    alt=""
                  />
                  <a>Marshall Erikson</a>
                </div>
                <div className={styles.profile}>
                  <img
                    src="https://occ-0-6194-3467.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYnnca7HCf0z4YHtIK5R8MIGCeMyodAsxBYSBmMkYHqjSw46VWWyNQirfwxT-CkbxPkp-G84Wu-iOMwGG-r9QAs.png?r=f71"
                    alt=""
                  />
                  <a>Barney Stinson</a>
                </div>
                <p className={styles.manage}>Manage Profiles</p>
              </div>
              <div className={styles.divider} />
              <div className={styles.divider} />
              <div className={styles.content_bottom}>
                <p>Account</p>
                <p>Help Center</p>
                <p onClick={logout}>Sign out of Netflix</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
