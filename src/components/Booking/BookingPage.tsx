import {useEffect, useReducer} from "react";
import BookingForm from "./BookingForm";
import {fetchAPI} from "./bookingAPI";
import '../../assets/shared.css';
import './book.css';
import useSubmitForm from "./useSubmitForm";
import map from '../../assets/images/map.jpg';
import {Action} from "./types.ts";


function initializeTimes(): string[] {
  const today = new Date();
  return fetchAPI(today);
}



const updateTimes = (_: string[], action: Action): string[] => {
  switch (action.type) {
    case 'date':
      return fetchAPI(action.payload);
    default:
      return [];
  }
};

export default function BookingPage() {
  const { submitForm } = useSubmitForm();
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <>
        <div className="reserve">
          <BookingForm
              submitForm={submitForm}
              availableTimes={availableTimes}
              dispatch={dispatch}
          />

          <img className="map" src={map} alt="Little Lemon location" />
        </div>
        <small className="rights">© All rights reserved to Little Lemon</small>
      </>
  );
}

export { updateTimes, initializeTimes, useSubmitForm };
