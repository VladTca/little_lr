import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {submitAPI} from "./bookingAPI";

// Типизация данных формы
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  occasion: string;
  guests: string;
  reserveNumber: number;
}

const useSubmitForm = () => {
  const [bookingForm, setBookingForm] = useState<FormData | null>(null);
  const navigate = useNavigate();

  const submitForm = (
      e: React.FormEvent<Element>,
      { formData }: { formData: FormData }
  ): void => {
    e.preventDefault();
    if (submitAPI(formData)) {
      setBookingForm({ ...formData });
    }
  };


  // Извлекаем значения только если bookingForm существует
  const date = bookingForm?.date ?? '';
  const time = bookingForm?.time ?? '';
  const reserveNumber = bookingForm?.reserveNumber ?? 0;

  useEffect(() => {
    if (bookingForm) {
      localStorage.setItem(
          "Little_Lemon-Table",
          JSON.stringify({
            date,
            time,
            reservation: reserveNumber,
          })
      );
      navigate("/confirmation", {
        state: { ...bookingForm },
      });
    }
  }, [bookingForm, date, time, reserveNumber, navigate]); // добавлены зависимости

  return { submitForm };
};

export default useSubmitForm;
