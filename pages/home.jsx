import React, { useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";

import Redirect from "../components/utilities/Redirect";
import firebaseClient from "../firebase/client";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/HeroSection/Hero";
import List from "../components/List/List";
import styles from "../styles/home.module.scss";
import {AppProps} from "next/app";

const Home = (props) => {
  const [user, loading, error] = useAuthState(firebaseClient.auth());


    if(loading){
        return null;
    }

  if (!user) {
    return <Redirect to="/login-or-register" />;
  }


  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <List data={props.popular} title="Popular" />
      <List data={props.comedy} title="Comedy" />
      <List data={props.drama} title="Drama & Romance" />
      <List data={props.family} title="Family" />
      <List data={props.horror} title="Horror" />
      {/*<List data={props.mystery} title="Mystery" />*/}
    </div>
  );
};

export async function getStaticProps() {
    const res1 = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9a3242bb503fd70b795480073df59b1a&language=en-US&page=1')
    const popular = await res1.json()

    const res2 = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=9a3242bb503fd70b795480073df59b1a&with_genres=35')
    const comedy = await res2.json()

    const res3 = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=9a3242bb503fd70b795480073df59b1a&with_genres=18')
    const drama = await res3.json()

    const res4 = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=9a3242bb503fd70b795480073df59b1a&with_genres=10751")
    const family = await res4.json()

    const res5 = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=9a3242bb503fd70b795480073df59b1a&with_genres=27")
    const horror = await res5.json()

    // const res6 = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=9a3242bb503fd70b795480073df59b1a&with_genres=9648")
    // const mystery = res6.json()

    return {
        props: {
            popular,
            comedy,
            drama,
            family,
            horror,
            // mystery
        },
    }
}

export default Home;
