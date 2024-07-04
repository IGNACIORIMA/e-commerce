import React from 'react'
import './styles/cartItem.css'
import { deleteProductThunk, updateProductThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'

const CartItem = ({prod}) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteProductThunk(prod.id));
    }

    const handleLess = () => {
        if (prod.quantity > 1) {
            dispatch(updateProductThunk(prod.id, {
                'quantity': prod.quantity - 1,
            }));
        }
    }

    const handlePlus = () => {
        dispatch(updateProductThunk(prod.id, {
            'quantity': prod.quantity + 1,
        }));
    }

  return (
    <article className='cartitem'>
        <h3 className='cartitem_title'>{prod.product?.title}</h3>
        <figure className='cartitem_img'>
            <img src={prod.product?.images[0].url} alt="product image" />
        </figure>
        <div className='cartitem_buttons'>
            <button onClick={handleLess}>-</button>
            <span>{prod.quantity}</span>
            <button onClick={handlePlus}>+</button>
        </div>
        <button onClick={handleDelete} className='cartitem_dlt'>Delete</button>
        <p className='cartitem_total'>Total: $ <span>{prod.product?.price * prod.quantity}</span></p>
    </article>
  )
}

export default CartItem