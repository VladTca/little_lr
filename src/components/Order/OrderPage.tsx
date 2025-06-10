import React, {useEffect, useState} from "react";
import './order.css';
import OrderForm from "./OrderForm";
import useSearch from "./useSearch";
import {Link} from "react-router-dom";
import {addCartSvg, removeCartSvg} from "../../assets/svg";
import cheeseBread from '../../assets/images/cheeseBread.jpg';
import salad from '../../assets/images/salad.jpg';
import pasta from '../../assets/images/pasta.jpg';
import fish from '../../assets/images/fish.jpg';
import oysters from '../../assets/images/oysters.jpg';
import potatoes from '../../assets/images/potatoes.jpg';
import {MenuItem} from "../context/initialState.ts";
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {addToCart, removeFromCart} from '../../redux/slices/cartSlice';


export default function OrderPage() {
  const cart = useAppSelector(state => state.cart.cart);
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState('');
  const { handleSearch } = useSearch({ search });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleAddToCart(item: MenuItem) {
    dispatch(addToCart(item));
  }

  function handleRemoveFromCart(itemId: number) {
    dispatch(removeFromCart(itemId));
  }

// тип для события submit
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const imageMap: { [key: string]: string } = {
    'cheeseBread.JPG': cheeseBread,
    'salad.JPG': salad,
    'pasta.JPG': pasta,
    'fish.JPG': fish,
    'oysters.JPG': oysters,
    'potatoes.JPG': potatoes,
  };

  // Правильно вычисленный total с приведением цены к числу
  const total = cart
      .reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0)
      .toFixed(2);

  return (
      <div className="order-page">
        <div className="order">
          <h2>ORDER ONLINE</h2>
          {submitted ? (
              <div className="submitted">
                <p>Order has been placed!</p>
                <Link to="/" rel="href" aria-label="Go back to Home page">Go Back</Link>
              </div>
          ) : (
              <div className="order-content">
                <div className="search">
                  <input
                      placeholder="Search menu...e.g pasta"
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                  />
                </div>
                <div className="order-items">
                  {handleSearch().map(item => (
                      <div className="order-item" key={item.id}>
                        <img src={imageMap[item.img]} alt={item.dishUpper} />
                        <p>{item.dishLower}</p>
                        <p>
                          <span>${item.price}</span>
                          <button aria-label="Remove from cart" onClick={() => handleRemoveFromCart(item.id)}>{removeCartSvg}</button>
                          <button aria-label="Add to cart" onClick={() => handleAddToCart(item)}>{addCartSvg}</button>
                        </p>
                      </div>
                  ))}
                </div>
                <div className="cart-items">
                  {cart.length === 0 ? (
                      <p className="cart-empty">Cart is empty!</p>
                  ) : (
                      <>
                        {cart.map(item => (
                            <div className="cart-item" key={item.id}>
                              <p>
                                <span>- {item.dishLower}</span>
                                <span><b>x{item.quantity}</b></span>
                              </p>
                            </div>
                        ))}
                        <p className="total">Total: ${total}</p>
                      </>
                  )}
                </div>
                <OrderForm onSubmit={onSubmit} />
              </div>
          )}
        </div>
        <small className="rights">© All rights reserved to Little Lemon</small>
      </div>
  );
}
