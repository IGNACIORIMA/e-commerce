import React from 'react'
import './styles/purchaseCard.css'

const PurchaseCard = ({prod}) => {

  return (
    <div className='pc'>
      <article className='purchasecard'>
          <figure className='purchasecard_container'>
              <img src={prod?.product.images[0].url} alt="item image" />
              <h3>{prod?.product.title}</h3>
              <h2>{prod?.quantity}</h2>
          </figure>
      </article>
    </div>
  )
}

export default PurchaseCard