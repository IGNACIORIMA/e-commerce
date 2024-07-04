import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../store/redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';
import PurchaseCard from '../components/purchases/PurchaseCard';
import './styles/purchases.css'

const Purchases = () => {

  const purchasesSlice = useSelector(store => store.purchasesSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, [])

  const total = purchasesSlice.reduce(
    (cv, prod) => cv += prod.quantity * prod.product?.price, 0
  );

  return (
    <div className='purchases'>
      <header className='purchases_header'>
        <h2> My purchases </h2> 
        <h2>TOTAL: $ {total}</h2>
      </header>
      {
        purchasesSlice.map((prod) => 
          <PurchaseCard
            key={prod.id}
            prod={prod}
          />
        )
      }
    </div>
  )
}

export default Purchases