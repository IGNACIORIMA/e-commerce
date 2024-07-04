import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postProductThunk } from '../../store/slices/cart.slice'
import './styles/prodDetail.css'

const ProdDetail = ({product}) => {

  const [counter, setCounter] = useState(1);

  const dispatch = useDispatch()

  const handleLess = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  const handlePlus = () => {
    setCounter (counter + 1)
  }

  const handleAddCart = () => {
    dispatch(postProductThunk({
      "quantity": counter,
      "productId": product.id,
    }));
  }

  return (
    <article className='proddetail'>
      <div className='proddetail_item'>
        <h3 className='proddetail_item-title'>{product?.brand}</h3>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
      </div>
      <div className='proddetail_specs'>
          <h3 className='proddetail_specs-price'><span>Price: </span><span> $ {product?.price}</span></h3>
          <div className='proddetail_btns'>
            <button className='proddetail_btns-less' onClick={handleLess}>-</button>
            <span className='proddetail_counter'>{counter}</span>
            <button className='proddetail_btns-plus' onClick={handlePlus}>+</button>
          </div>
      </div>
          <button className='proddetail_add' onClick={handleAddCart}>Add to cart</button>
    </article>
  )
}

export default ProdDetail