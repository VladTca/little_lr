import React, {useEffect, useState} from "react";
import {Action} from './types.ts';
import {ErrorMessage, Field, Form, Formik, FormikHelpers} from 'formik';
import {BookingFormSchema} from "./fieldsValidation";

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

interface BookingFormProps {
    dispatch: React.Dispatch<Action>;
    availableTimes: string[];
    submitForm: (e: React.FormEvent, data: { formData: FormData }) => void;
}

export default function BookingForm({
    dispatch,
    availableTimes,
    submitForm,
}: BookingFormProps) {
    const today = new Date().toISOString().slice(0, 10);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const initialValues: Omit<FormData, 'reserveNumber'> = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        date: today,
        time: '',
        occasion: '',
        guests: '2',
    };

    const handleSubmit = (
        values: typeof initialValues, 
        { setSubmitting }: FormikHelpers<typeof initialValues>
    ) => {
        const formData: FormData = {
            ...values,
            reserveNumber: Math.floor(Math.random() * 1000),
        };

        const syntheticEvent = { preventDefault: () => {} } as React.FormEvent;
        submitForm(syntheticEvent, { formData });
        setIsSubmitted(true);
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={BookingFormSchema}
            onSubmit={handleSubmit}
        >
            {({ values,   isSubmitting }) => {
                useEffect(() => {
                    dispatch({
                        type: 'date',
                        payload: new Date(values.date),
                    });
                }, [values.date, dispatch]);

                return (
                    <Form>
                        <h2>RESERVATION ONLINE</h2>
                        <p>Choose date and time:</p>
                        <div className="date-time">
                            <Field
                                type="date"
                                id="date"
                                name="date"
                                min={today}
                                max="2025-12-31"
                            />
                            <Field as="select" name="time">
                                <option value="">Select time</option>
                                {availableTimes.map(item => (
                                    <option value={item} key={item}>
                                        {item}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        <ErrorMessage name="date" component="small" />
                        <ErrorMessage name="time" component="small" />

                        <small>*Max 10 guests per table</small>
                        <Field as="select" name="guests">
                            <option value="1">1 Person</option>
                            <option value="2">2 guests</option>
                            <option value="3">3 guests</option>
                            <option value="4">4 guests</option>
                            <option value="5">5 guests</option>
                            <option value="6">6 guests</option>
                            <option value="7">7 guests</option>
                            <option value="8">8 guests</option>
                            <option value="9">9 guests</option>
                            <option value="10">10 guests</option>
                        </Field>
                        <ErrorMessage name="guests" component="small" />

                        <div className="input-group">
                            <Field
                                type="text"
                                name="firstName"
                                id="firstName"
                                maxLength={15}
                            />
                            <label htmlFor="firstName">First Name</label>
                            <ErrorMessage name="firstName" component="small" />
                        </div>

                        <div className="input-group">
                            <Field
                                type="text"
                                name="lastName"
                                id="lastName"
                                maxLength={15}
                            />
                            <label htmlFor="lastName">Last Name</label>
                            <ErrorMessage name="lastName" component="small" />
                        </div>

                        <div className="input-group">
                            <Field
                                type="email"
                                name="email"
                                id="email"
                            />
                            <label htmlFor="email">Email</label>
                            <ErrorMessage name="email" component="small" />
                        </div>

                        <div className="input-group">
                            <Field
                                type="tel"
                                name="phone"
                                id="phone"
                                minLength={11}
                                maxLength={11}
                            />
                            <label htmlFor="phone">Phone Number (must start with +) e.g +1234567890</label>
                            <ErrorMessage name="phone" component="small" />
                        </div>

                        <Field
                            as="select"
                            name="occasion"
                            style={{ width: '280px' }}
                        >
                            <option value="">Select an occasion (optional)</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Business">Business</option>
                        </Field>

                        {isSubmitted && (
                            <div style={{ 
                                color: 'green', 
                                margin: '10px 0', 
                                padding: '10px', 
                                backgroundColor: 'rgba(0, 255, 0, 0.1)', 
                                borderRadius: '5px',
                                textAlign: 'center'
                            }}>
                                Your booking request has been accepted! Redirecting to confirmation page...
                            </div>
                        )}

                        <button 
                            aria-label="On Click confirm booking details" 
                            type="submit" 
                            disabled={isSubmitting}
                        >
                            Confirm booking
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
}
