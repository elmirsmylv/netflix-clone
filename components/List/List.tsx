import React, { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import ListItem from "../ListItem/ListItem";
import styles from "./List.module.scss";
import Slider from "react-slick";


const List = () => {
  const [slideNum, setSlideNum] = useState(0);

  const listRef = useRef<HTMLDivElement>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 7,
        slidesToScroll: 6
    };

  // const handleClick = (direction: string) => {
  //   let distance: number;

  //   if (direction === "left" && listRef.current !== null && slideNum > 0) {
  //     distance = listRef.current.getBoundingClientRect().x - 50;

  //     setSlideNum(slideNum - 1);

  //     listRef.current.style.transform = `translate(${230 + distance}px)`;
  //   }

  //   if (direction === "right" && listRef.current !== null && slideNum < 4) {
  //     distance = listRef.current.getBoundingClientRect().x - 50;

  //     setSlideNum(slideNum + 1);

  //     listRef.current.style.transform = `translate(${-230 + distance}px)`;
  //   }
  // };

  return (
    <div className={styles.container}>
      <span className={styles.title}>Continue to watching</span>
      <div className={styles.wrapper}>
        {/* <FiChevronLeft
          className={`${styles.slider_arrow} ${styles.left_arrow}`}
          onClick={() => handleClick("left")}
        /> */}
        <div className={styles.list_container}  ref={listRef}>
          <Slider {...settings}>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </Slider>
        </div>
        {/* <FiChevronRight
          className={`${styles.slider_arrow} ${styles.right_arrow}`}
          onClick={() => handleClick("right")}
        /> */}
      </div>
    </div>
  );
};

export default List;
