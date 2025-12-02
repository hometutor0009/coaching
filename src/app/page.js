import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials/Testimonials";
import Subjects from "./components/Subjects/Subjects";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Testimonials />
      <Subjects />
      <Contact />
      <Footer />
    </>
  );
}
