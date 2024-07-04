import React from 'react';
import './styles/prodCard.css'
import { useNavigate } from 'react-router-dom';
import { postProductThunk } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';

const ProdCard = ({prod}) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleDetail = () => {
        navigate(`/product/${prod.id}`)
    };

    const handleAddCart = () => {
        dispatch(postProductThunk({
            "quantity": 1,
            "productId": prod.id
        }));
    }

  return (
    <article className='prodcard'>
        <figure onClick={handleDetail} className='prodcard_img'>
            <img src={prod.images[0].url} alt="product image" />
            <img src={prod.images[1].url} alt="product image" />
        </figure>
        <hr className='prodcard_hr' />
        <ul className='prodcard_list'>
            <li className='prodcard_item'><span>{prod.brand}</span><span>{prod.title}</span></li>
            <li className='prodcard_item'><span>Price: </span><span> $ {prod.price}</span></li>
        </ul>
        <div className='prodcard_btns'>
            <button onClick={handleDetail}>Detail</button>
            <button onClick={handleAddCart}>Add to cart</button>
        </div>
    </article>
  )
}

export default ProdCard;