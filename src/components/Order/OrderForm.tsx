import React, {useContext} from "react";
import {AppContext} from '../context/AppContext';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {BookingFormSchema} from "../Booking/fieldsValidation.tsx";

interface OrderFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function OrderForm({ onSubmit }: OrderFormProps) {
  const context = useContext(AppContext);
  if (!context) throw new Error('AppContext must be used within a provider');
  const { cart } = context;

  return (
      <div className="order-details">
        <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              address: '',
              date: '',
              time: '',
              guests: '',
              occasion: '',
            }}
            validationSchema={BookingFormSchema}
            onSubmit={(values, { resetForm }) => {
              console.log('Form submitted:', values);
              onSubmit({} as any);
              resetForm();
            }}
        >
          {() => (
              <Form>
                <p>Order details</p>

                <div className="input-group">
                  <Field type="text" name="firstName" maxLength={15} required />
                  <label>First Name</label>
                  <ErrorMessage name="firstName" component="small" />
                </div>

                <div className="input-group">
                  <Field type="text" name="lastName" maxLength={15} required />
                  <label>Last Name</label>
                  <ErrorMessage name="lastName" component="small" />
                </div>

                <div className="input-group">
                  <Field type="email" name="email" required />
                  <label>Email</label>
                  <ErrorMessage name="email" component="small" />
                </div>

                <div className="input-group">
                  <Field type="tel" name="phone" required />
                  <label>Phone (must start with +)</label>
                  <ErrorMessage name="phone" component="small" />
                </div>

                <div className="input-group">
                  <Field name="address" required />
                  <label>Delivery Address</label>
                  <ErrorMessage name="address" component="small" />
                </div>

                <button type="submit" disabled={cart.length === 0}>
                  CHECKOUT
                </button>
              </Form>
          )}
        </Formik>
      </div>
  );
}
