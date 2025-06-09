import '../../assets/shared.css';
import './home.css';
import About from './About';
import Footer from '../Footer/Footer';
import { useEffect } from "react";

export default function AboutPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <section id='about'>
          <About />
        </section>
      </main>
      <Footer />
    </>
  )
};