import '../../assets/shared.css';
import './footer.css';
import Nav from '../Header/Nav';
import table from '../../assets/images/table.jpg';
import {JSX} from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="footer">
        <img src={table} alt="Lemon" />
        <section>
          <p>Doormat Navigation</p>
          <Nav />
        </section>
        <section>
          <p>Social Media</p>
          <ul>
            <li><a href='https://www.instagram.com/' aria-label='Go to LittleLemon Instagram'>Instagram</a></li>
            <li><a href='https://www.facebook.com/' aria-label='Go to LittleLemon Facebook'>Facebook</a></li>
            <li><a href='https://www.youtube.com/' aria-label='Go to LittleLemon YouTube'>YouTube</a></li>
          </ul>
        </section>
        <section className='contact'>
          <p>Contact</p>
          <ul>
            <li>Chicago, Down street 15/89</li>
            <li>+255682234</li>
            <li>little.lemon@example.com</li>
          </ul>
        </section>
      </div>
    </footer>
  )
}