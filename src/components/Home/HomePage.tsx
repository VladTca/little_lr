import {JSX, useEffect} from 'react';
import '../../assets/globalstyles.css';
import './home.css';
import Article from './Article';
import Specials from './Specials';
import Footer from '../Footer/Footer';

export default function HomePage(): JSX.Element {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <section id='article'>
          <Article />
        </section>
        <section id='specials'>
          <Specials />
        </section>
      </main>
      <Footer />
    </>
  )
};
