import React, { useRef, useState } from "react";

import ListItem from "../ListItem/ListItem";
import styles from "./List.module.scss";
import Slider from "react-slick";
import axios from "axios";


const List = ({data, title, ...rest}) => {

  const listRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 6.1,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5.1,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1198,
                settings: {
                    slidesToShow: 4.1,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 975,
                settings: {
                    slidesToShow: 3.2,
                    slidesToScroll: 5,
                }
            },
        ]
    };

  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <div className={styles.wrapper}>
        <div className={styles.list_container}  ref={listRef}>
          <Slider {...settings}>
              {
                  data && data.results.map((item, index) => (
                      <ListItem key={index} data={item}  />
                  ))
              }
          </Slider>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
    const movies = await axios('https://api.themoviedb.org/3/movie/popular?api_key=9a3242bb503fd70b795480073df59b1a&language=en-US&page=1')

    return {
        props: {
            movies,
        },
    }
}

export default List;