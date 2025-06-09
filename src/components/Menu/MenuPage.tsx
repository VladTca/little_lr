import '../../assets/shared.css';
import './menu.css';
import {useContext, useEffect} from "react";
import {AppContext} from '../context/AppContext';
import Footer from '../Footer/Footer';
import cheeseBread from '../../assets/images/cheeseBread.JPG';
import salad from '../../assets/images/salad.JPG';
import pasta from '../../assets/images/pasta.JPG';
import fish from '../../assets/images/fish.JPG';
import oysters from '../../assets/images/oysters.JPG';
import potatoes from '../../assets/images/potatoes.JPG';

export default function MenuPage() {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='menu'>
        <h2>Little Lemon menu</h2>
        <div className='menu-content'>
          {
            menuData.map(item => {
              return (
                <div className='menu-content-item' key={item.id}>
                  <img src={imageMap[item.img]} alt={item.dishUpper}/>
                  <div>
                    <p>{item.dishUpper}</p>
                    <p>{item.description}</p>
                  </div>
                  <span>${item.price}</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </>
  )
};
