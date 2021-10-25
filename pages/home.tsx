import React, { useEffect } from "react";

import { useAuthState } from "react-firebase-hooks/auth";

import Redirect from "../components/utilities/Redirect";
import firebaseClient from "../firebase/client";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/HeroSection/Hero";
import List from "../components/List/List";
import styles from "../styles/home.module.scss";

const home = () => {
  const [user, loading, error] = useAuthState(firebaseClient.auth());

  if (!user) {
    return <Redirect to="/login-or-register" />;
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <List />
    </div>
  );
};

export default home;
