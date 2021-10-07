import React from "react";

type item = {
  title: string;
};

interface Props {
  items: item[];
}

const FooterMenu: React.FC<Props> = ({ items }) => {
  return (
    <section>
      <nav>
        <ul>
          {items.length &&
            items.map((item, index) => (
              <li key={index}>
                <a href="#">{item.title}</a>
              </li>
            ))}
        </ul>
      </nav>
    </section>
  );
};

export default FooterMenu;
