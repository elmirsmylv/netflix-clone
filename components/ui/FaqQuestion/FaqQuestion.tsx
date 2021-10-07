import React, { useState } from "react";

import styles from "./FaqQuestion.module.scss";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

interface FaqQuestionProps {
  id: number;
  question: string;
  answer: string;
}

const FaqQuestion: React.FC<FaqQuestionProps> = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      key={id}
      className={styles.list_item}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={styles.question}>
        <h3>{question}</h3>
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlinePlus size={24} />}
      </div>
      <div className={isOpen ? styles.answer_open : styles.answer_close}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqQuestion;
