import '../../assets/shared.css';
import './header.css';
import Nav from "./Nav";
import {exitSvg, hamburgerSvg} from '../../assets/svg';
import {JSX, useState} from "react";
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.png';

export default function Header(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  function toggleHamburger(): void {
    setOpen(!open);
  }

  return (
    <header>
      <div className={`hamburger ${open ? 'show-content' : 'hide-content'}`}>
        <div className="hamburger-content">
          <span
            className="hamburger-content-exit"
            onClick={() => setOpen(false)}
            >
            {exitSvg}
          </span>
          <Nav onLinkClick={() => setOpen(false)} isMobile={true} />
        </div>
      </div>
      <div className="header fixed">
        <span
          className="hamburger-btn"
          onClick={toggleHamburger}>{hamburgerSvg}
        </span>
        <Link to="/" aria-label="Go to Home Page">
          <img src={logo} alt="Little Lemon Logo" />
        </Link>
        <span className="nav">
          <Nav />
        </span>
      </div>
    </header>
  )
}
