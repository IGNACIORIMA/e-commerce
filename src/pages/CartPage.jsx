import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartProdsThunk, setCart } from '../store/slices/cart.slice';
import CartItem from '../components/cartPage/CartItem';
import './styles/cartPage.css'
import { postPurchasesThunk } from '../store/slices/purchases.slice';

const CartPage = () => {

  const cart = useSelector((store) => store.cartSlice);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartProdsThunk());
  }, [])

  const products = cart.reduce(
    (cv, prod) => cv += prod.quantity, 0
  );

  const total = cart.reduce(
    (cv, prod) => cv += prod.quantity * prod.product?.price, 0
  );

  const handleBuy = () => {
    dispatch(postPurchasesThunk());
    dispatch(setCart([]));
  };

  return (
    <div className='cartpage'>
      <div className='cartpage_container'>
        {
          cart.map(prod => (
            <CartItem
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </div>
      <div className='cartpage_totals'>
        <ul className='cartpage_list'>
          <li className='cartpage_item'><span>Products </span><span>{products}</span></li>
          <li className='cartpage_item'><span>Total: </span><span> $ {total}</span></li>
        </ul>
        <button onClick={handleBuy} className='cartpage_btn'>Buy all products</button>
      </div>
    </div>
  )
}

export default CartPage;