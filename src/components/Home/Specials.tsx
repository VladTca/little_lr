import {useContext} from "react";
import {AppContext} from '../context/AppContext';
import cheeseBread from '../../assets/images/cheeseBread.jpg';
import salad from '../../assets/images/salad.jpg';
import pasta from '../../assets/images/pasta.jpg';
import fish from '../../assets/images/fish.jpg';
import oysters from '../../assets/images/oysters.jpg';
import potatoes from '../../assets/images/potatoes.jpg';
import {MenuItem} from '../context/initialState.ts';

export default function Specials() {
    const context = useContext(AppContext);
    if (!context) return <p>Error: context not available</p>;

    const { menuData } = context;

    const imageMap = {
        'fish.JPG': fish,
        'oysters.JPG': oysters,
        'potatoes.JPG': potatoes,
        'cheeseBread.JPG': cheeseBread,
        'salad.JPG': salad,
        'pasta.JPG': pasta,
    };

    return (
        <>
            <div className='specials-heading'>
                <p>Dishes of the Day!</p>
            </div>
            <div className='specials-grid'>
                {
                    menuData.map((special: MenuItem) => {

                            return (
                                <div className='card' key={special.id}>
                                    <img
                                        src={imageMap[special.img as keyof typeof imageMap]}
                                        alt={special.dishLower}
                                    />
                                    <div className='card-text'>
                                        <h3>
                                            <span>{special.dishUpper}</span>
                                            <span>${special.price}</span>
                                        </h3>
                                        <p>{special.description}</p>
                                    </div>
                                </div>
                            );
                    })
                }
            </div>
        </>
    );
}
