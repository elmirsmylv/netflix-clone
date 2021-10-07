import React from "react";

import styles from "./Footer.module.scss";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  const menus = [
    {
      items: [
        {
          title: "FAQ",
        },
        {
          title: "Investor Relations",
        },
        {
          title: "Privacy",
        },
        {
          title: "Speed Test",
        },
      ],
    },
    {
      items: [
        {
          title: "Help Center",
        },
        {
          title: "Jobs",
        },
        {
          title: "Cookie Preferences",
        },
        {
          title: "Legal Notices",
        },
      ],
    },
    {
      items: [
        {
          title: "Account",
        },
        {
          title: "Ways to watch",
        },
        {
          title: "Corparate Information",
        },
        {
          title: "Only on Netflix",
        },
      ],
    },
    {
      items: [
        {
          title: "Media Center",
        },
        {
          title: "Terms of Use",
        },
        {
          title: "Contact Us",
        },
      ],
    },
  ];

  console.log(menus);

  return (
    <>
      <div className={styles.divider} />
      <div className={styles.container}>
        <footer>
          <h5>Questions? Contact Us.</h5>
          <div className={styles.menu_section}>
            {menus.map((menu, index) => (
              <FooterMenu key={index} items={menu.items} />
            ))}
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
