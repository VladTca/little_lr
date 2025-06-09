import '../../assets/shared.css';
import './menu.css';
import {useContext, useEffect} from "react";
import {AppContext} from '../context/AppContext';
import Footer from '../Footer/Footer';
import cheeseBread from '../../assets/images/cheeseBread.jpg';
import salad from '../../assets/images/salad.jpg';
import pasta from '../../assets/images/pasta.jpg';
import fish from '../../assets/images/fish.jpg';
import oysters from '../../assets/images/oysters.jpg';
import potatoes from '../../assets/images/potatoes.jpg';
import {MenuItem} from "../context/initialState.ts";


export default function MenuPage() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be used within a provider");
  }

  const { menuData } = context;


  // Map image names to imported images
  const imageMap: { [key: string]: string } = {
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
            menuData.map((item: MenuItem) => (
                <div className='menu-content-item' key={item.id}>
                  <img src={imageMap[item.img]} alt={item.dishUpper}/>
                  <div>
                    <p>{item.dishUpper}</p>
                    <p>{item.description}</p>
                  </div>
                  <span>${item.price}</span>
                </div>
            ))

          }
        </div>
      </div>
      <Footer />
    </>
  )
};
