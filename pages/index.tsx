import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Faq from "../components/FAQ/Faq";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Section1 from "../components/Sections/Section1";
import Section2 from "../components/Sections/Section2";
import Section3 from "../components/Sections/Section3";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix - Watch TV Shows Online</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
        />
      </Head>

      <Header />
      <Section1 />
      <Section2 photoUrl="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
      <Section3 />
      <Section2 photoUrl="https://occ-0-3467-3466.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;

// FAQ map issue
