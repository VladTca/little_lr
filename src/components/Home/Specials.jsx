import {deliverySvg} from '../../assets/svg';
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from '../context/AppContext';
import cheeseBread from '../../assets/images/cheeseBread.JPG';
import salad from '../../assets/images/salad.JPG';
import pasta from '../../assets/images/pasta.JPG';
import fish from '../../assets/images/fish.JPG';
import oysters from '../../assets/images/oysters.JPG';
import potatoes from '../../assets/images/potatoes.JPG';

export default function Specials() {
  const { menuData } = useContext(AppContext);

  // Map image names to imported images
  const imageMap = {
    'cheeseBread.JPG': cheeseBread,
    'salad.JPG': salad,
    'pasta.JPG': pasta,
    'fish.JPG': fish,
    'oysters.JPG': oysters,
    'potatoes.JPG': potatoes,
  };

  return (
    <>
      <div className='specials-heading'>
        <p>This Weeks Specials</p>
        <Link to='/menu' rel='href' aria-label="Go to Online menu page">Online Menu</Link>
      </div>
      <div className='specials-grid'>
        {
          menuData.map(special => {
            if (special.id === 1 || special.id === 2 || special.id === 3) {
              return (
                <div className='card' key={special.id}>
                  <img src={imageMap[special.img]} alt={special.dish} />
                  <div className='card-text'>
                    <h3><span>{special.dishUpper}</span><span>${special.price}</span></h3>
                    <p>{special.description}</p>
                    <Link to='/order' aria-label="Go to Order page">Order a delivery {deliverySvg}</Link>
                  </div>
                </div>
              )
            } else {
              return '';
            }
          })
        }
      </div>
    </>
  )
};
