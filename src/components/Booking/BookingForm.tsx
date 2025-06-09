import React, {useState} from "react";
import {Action} from './types.ts';
// Импорт функций валидации
import {validateEmail, validatePhone} from "./fieldsValidation";


// Тип данных формы
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

// Тип пропсов компонента
interface BookingFormProps {
    dispatch: React.Dispatch<Action>;
    availableTimes: string[];
    submitForm: (e: React.FormEvent<Element>, data: { formData: FormData }) => void;
}


export default function BookingForm({
                                        dispatch,
                                        availableTimes,
                                        submitForm,
                                    }: BookingFormProps) {
    const [firstName, setFirstName] = useState({ val: '', error: false });
    const [lastName, setLastName] = useState({ val: '', error: false });
    const [email, setEmail] = useState({ val: '', error: false });
    const [phone, setPhone] = useState({ val: '', error: false });
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [time, setTime] = useState('');
    const [occasion, setOccasion] = useState('');
    const [guests, setGuests] = useState('2');

    const disableBtn = phone.error || email.error || firstName.error || lastName.error;

    function handleDateReducer() {
        dispatch({
            type: 'date',
            payload: new Date(date),
        });
    }

    function handleEmailBlur() {
        setEmail({ ...email, error: !validateEmail(email.val) });
    }

    function handlePhoneBlur() {
        setPhone({ ...phone, error: !validatePhone(phone.val) });
    }

    function handleFirstNameBlur() {
        const textRegex = /^[a-zA-Z]{3,15}$/;
        setFirstName({ ...firstName, error: !textRegex.test(firstName.val) });
    }

    function handleLastNameBlur() {
        const textRegex = /^[a-zA-Z]{3,15}$/;
        setLastName({ ...lastName, error: !textRegex.test(lastName.val) });
    }

    return (
        <form
            onSubmit={e =>
                submitForm(e, {
                    formData: {
                        firstName: firstName.val,
                        lastName: lastName.val,
                        email: email.val,
                        phone: phone.val,
                        date,
                        time,
                        occasion,
                        guests,
                        reserveNumber: Math.floor(Math.random() * 1000),
                    },
                })
            }
        >
            <h2>RESERVATION ONLINE</h2>
            <p>Choose date and time:</p>
            <div className="date-time">
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={e => {
                        setDate(e.target.value);
                        handleDateReducer();
                    }}
                    min={new Date().toISOString().slice(0, 10)}
                    max="2025-12-31"
                    required
                />
                <select name="time" value={time} onChange={e => setTime(e.target.value)} required>
                    <option label="Select time" value="">Select time</option>
                    {availableTimes.map(item => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
            <small>*Max 10 guests per table</small>
            <select name="guests" value={guests} onChange={e => setGuests(e.target.value)} required>
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
            </select>

            <div className="input-group">
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    maxLength={15}
                    value={firstName.val}
                    onChange={e => setFirstName({ ...firstName, val: e.target.value })}
                    onBlur={handleFirstNameBlur}
                    required
                />
                <label htmlFor="firstName">First Name</label>
                {firstName.error && <small>Please enter a valid name (3–15 letters).</small>}
            </div>

            <div className="input-group">
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    maxLength={15}
                    value={lastName.val}
                    onChange={e => setLastName({ ...lastName, val: e.target.value })}
                    onBlur={handleLastNameBlur}
                    required
                />
                <label htmlFor="lastName">Last Name</label>
                {lastName.error && <small>Please enter a valid name (3–15 letters).</small>}
            </div>

            <div className="input-group">
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email.val}
                    onChange={e => setEmail({ ...email, val: e.target.value })}
                    onBlur={handleEmailBlur}
                    required
                />
                <label htmlFor="email">Email</label>
                {email.error && <small>Please enter a valid email address.</small>}
            </div>

            <div className="input-group">
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={phone.val}
                    onChange={e => setPhone({ ...phone, val: e.target.value })}
                    onBlur={handlePhoneBlur}
                    minLength={11}
                    maxLength={11}
                    required
                />
                <label htmlFor="phone">Phone Number e.g +0123456789</label>
                {phone.error && (
                    <>
                        <small>Phone number should start with + or 0.</small>
                        <small>Min & Max 10 numbers.</small>
                    </>
                )}
            </div>

            <select
                name="occasion"
                style={{ width: '280px' }}
                value={occasion}
                onChange={e => setOccasion(e.target.value)}
            >
                <option value="">Select an occasion (optional)</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Business">Business</option>
            </select>

            <button aria-label="On Click confirm booking details" disabled={disableBtn} type="submit">
                Confirm booking
            </button>
        </form>
    );
}
