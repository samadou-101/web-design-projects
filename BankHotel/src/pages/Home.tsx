import React from "react";
import Header from "../components/home/header/Header";
import Hero from "../components/home/hero/Hero";
import About from "../components/home/about/About";
import Services from "../components/home/services/Services";
import Best_Apartment from "../components/home/apartment/Best_Apartment";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Best_Apartment />
    </>
  );
}

export default Home;
