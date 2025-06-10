import * as Yup from 'yup';

const BookingFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-zA-Z]{3,15}$/, 'Please enter a valid name (3–15 letters)')
    .required('First name is required'),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]{3,15}$/, 'Please enter a valid name (3–15 letters)')
    .required('Last name is required'),
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\+[0-9]{10}$/, 'Phone number must start with + followed by 10 digits')
    .required('Phone number is required'),
  date: Yup.string()
    .required('Date is required'),
  time: Yup.string()
    .required('Time is required'),
  guests: Yup.string()
    .required('Number of guests is required'),
  occasion: Yup.string()
    .optional(),
});

export { BookingFormSchema };
