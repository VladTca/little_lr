import {Link} from "react-router-dom";
import entrance from '../../assets/images/LLR-EntranceLeft.png';
import './home.css';
import '../../assets/shared.css';


export default function Article() {
    return (
        <div className="article">
            <div className="article-content">
                <h2>Little Lemon Restaurant Chicago</h2>
                <h3>Welcome to us!</h3>
                <p>
                    Little Lemon isn’t just a restaurant — it’s a cozy little haven where
                    good food meets great vibes. Tucked right in the heart of downtown, we
                    welcome everyone who enjoys delicious meals and cheerful company. Our
                    menu is a delightful mix of timeless classics and modern favorites,
                    all lovingly prepared with fresh, locally-sourced ingredients. Craving
                    a quick lunch? We’ve got you. Planning a romantic dinner? We’re
                    already fluffing the napkins. Every guest is like a friend to us, and
                    our team is always excited to see new (and familiar) faces walk
                    through the door. Come on in — we promise to feed you well, pour you
                    something nice, and send you home full and happy! 😄
                </p>
                <Link to="/book" rel="href" aria-label="Go to book a table page">
                    Reservation
                </Link>
            </div>
            <div className="article-content-right">
                <img src={entrance} alt="entrance"/>
            </div>
        </div>
    );
};
