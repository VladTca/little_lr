import HomePage from "./components/Home/HomePage";
import BookingPage from "./components/Booking/BookingPage";
import OrderPage from "./components/Order/OrderPage";
import {Route, Routes} from "react-router-dom";
import MenuPage from "./components/Menu/MenuPage";
import Confirmation from "./components/Booking/Confirmation";
import Header from "./components/Header/Header";
import AboutPage from "./components/Home/AboutPage";
import tableBackground from './assets/images/table.jpg';
import {JSX} from "react";
import {AppContextProvider} from './components/context/AppContext';

function App(): JSX.Element {
    return (
        <AppContextProvider>
            <img className="bg" alt="Site Background" src={tableBackground} />
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/order" element={<OrderPage />} />
                    <Route path="/book" element={<BookingPage />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                </Routes>
            </div>
        </AppContextProvider>
    );
}

export default App;
