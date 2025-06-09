import {starSvg} from '../../assets/svg';
import ratingsData from './ratingsData';
import person1 from '../../assets/images/person1.jpeg';
import person2 from '../../assets/images/person2.jpeg';
import person3 from '../../assets/images/person3.jpeg';
import person4 from '../../assets/images/person4.jpeg';

export default function Ratings() {
  // Map image names to imported images
  const imageMap = {
    'person1.jpeg': person1,
    'person2.jpeg': person2,
    'person3.jpeg': person3,
    'person4.jpeg': person4,
  };

  return (
    <div className='ratings-content'>
      <p className='title'>What our customers say!</p>
      <div className="ratings-grid">
        {
          ratingsData.map(rating => {
            return (
              <div className="ratings-card" key={rating.id}>
                <p>{starSvg}{starSvg}{starSvg}{starSvg}{starSvg}</p>
                <div className='customer'>
                  <a href='https://this-person-does-not-exist.com/en' rel="noreferrer" target="_blank" aria-label='Go to external page'>
                    <img src={imageMap[rating.img]} alt={rating.name}/>
                  </a>
                  <p>{rating.name}</p>
                </div>
                <p>{rating.text}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
