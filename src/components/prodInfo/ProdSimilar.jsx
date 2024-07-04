import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import ProdCard from '../homePage/ProdCard';
import './styles/prodSimilar.css' 


const ProdSimilar = ({product}) => {

  const [items, getItems] = useFetch();

  useEffect(() => {
    if (product) {
      const path = `/products?categoryId=${product?.categoryId}`;
      getItems(path);
    }
  }, [product]);


  const cbFilter = (prod) => {
    return prod.id !== product.id;
  }

  return (
    <div className='prodsimilar'>
      <h2 className='prodsimilar_title'>Discover similar items</h2>
      <div className='homepage_container'>
        {
          items?.filter(cbFilter).map(prod => (
          <ProdCard
            key={prod.id}
            prod={prod}
          />
          ))
        }
      </div>
    </div>
  )
}

export default ProdSimilar