import '../../assets/shared.css';
import './footer.css';
import Nav from '../Header/Nav';
import lemon from '../../assets/images/footer2.jpg';
import {JSX} from 'react';
import instagram from '../../assets/images/instagram-svgrepo-com.svg';
import facebook from '../../assets/images/facebook-svgrepo-com.svg';
import youtube from '../../assets/images/youtube-svgrepo-com.svg';


export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="footer">
        <img src={lemon} alt="Lemon" />
        <section>
          <p>Little Lemon Restaurant</p>
          <Nav />
        </section>
        <section>
          <p>Social Media</p>
          <ul>
            <li>
              <a href='https://www.instagram.com/' aria-label='Go to LittleLemon Instagram'>
               <img src={instagram} alt='Instagram' />
                Instagram
              </a>
            </li>
            <li><a href='https://www.facebook.com/' aria-label='Go to LittleLemon Facebook'>
              <img src={facebook} alt='Facebook'/>
              Facebook
            </a></li>
            <li><a href='https://www.youtube.com/' aria-label='Go to LittleLemon YouTube'>
              <img src={youtube} alt="YouTube"/>
              YouTube</a></li>
          </ul>
        </section>
        <section className='contact'>
          <p>Contact</p>
          <ul>
            <li>348 Lemon Grove Ln, IL 60439 ,Chicago</li>
            <li>+1 (773) 555-1919</li>
            <li>lhello@littlelemon-il.fake</li>
          </ul>
        </section>
      </div>
    </footer>
  )
}