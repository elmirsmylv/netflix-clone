import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

import styles from "./Faq.module.scss";
import FAQ from "../../utils/FAQ.json";
import FaqQuestion from "../ui/FaqQuestion/FaqQuestion";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.divider} />
      <div className={styles.container}>
        <h1>Frequently Asked Questions</h1>
        <div className={styles.faq_list}>
          {FAQ &&
            FAQ.map((item) => (
              <FaqQuestion
                id={item.id}
                question={item.question}
                answer={item.answer}
              />
            ))}
        </div>
        <div className={styles.section_bottom}>
          <h5>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h5>
          <div className={styles.input_section}>
            <input type="text" placeholder="Email address" />
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
