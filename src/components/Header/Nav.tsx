import {Link} from "react-router-dom";
import './Nav.css';
import {JSX} from "react";

interface NavProps {
  onLinkClick?: () => void;
  isMobile?: boolean;
}

export default function Nav({ onLinkClick, isMobile = false }: NavProps): JSX.Element {
  const handleClick = (): void => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <nav className={isMobile ? 'mobile-nav' : 'desktop-nav'}>
      <ul>
        <li><Link to="/" aria-label="Go to Home Page" onClick={() => handleClick()}>Home</Link></li>
        <li><Link to="/menu" aria-label="Go to Menu Page" onClick={() => handleClick()}>Menu</Link></li>
        <li><Link to="/book" aria-label="Go to Book a table Page" onClick={() => handleClick()}>Reservation</Link></li>
        <li><Link to="/order" aria-label="Go to Order Online Page" onClick={() => handleClick()}>Delivery</Link></li>
        <li>
          <Link
            to="/about"
            aria-label="Go to About Page"
            onClick={() => handleClick()}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}