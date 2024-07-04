import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import ProdCard from '../components/homePage/ProdCard';
import './styles/homePage.css'
import FilterPrice from '../components/homePage/FilterPrice';
import FilterSelect from '../components/homePage/FilterSelect';

const body = document.querySelector('body');

const HomePage = () => {

  const [inputValue, setInputValue] = useState('');

  const [inputPrice, setInputPrice] = useState({
    min: 0,
    max: Infinity,
  });

  const [categoryValue, setCategoryValue] = useState('');

  const [menu, setMenu] = useState(false);

  const products = useSelector((store) => store.products);

  const dispatch = useDispatch();

  console.log(categoryValue);

  useEffect(() => {

    dispatch(getProductsThunk());

  }, []);

  const textInput = useRef();

  const handleChange = () => {
    setInputValue(textInput.current.value.trim().toLowerCase());
  }

  const cbFilter = (prod) => {
    const name = prod.title.toLowerCase().includes(inputValue);
    const price = +prod.price <= +inputPrice.max && +prod.price >= +inputPrice.min;
    const category = categoryValue===''? true : prod.categoryId=== +categoryValue;
    return name && price && category;
  }

  const handleMenu = () => {
    setMenu(!menu);
  }

  const handleMode = () => {
    body.classList.toggle('dark');
  }

  return (
    <div className='homepage'>
      <div className={`homepage_filters ${menu && 'active'}`}>
        <button onClick={handleMenu}>X</button>
        <hr className='homepage_filter-hr'/>
        <FilterPrice
          setInputPrice={setInputPrice}
        />
        <span className='homepage_filter-title'>Categories</span>
        <hr className='homepage_filter-hr'/>
        <FilterSelect
          setCategoryValue={setCategoryValue}
        />
        <button onClick={handleMode}><i class='bx bx-moon'></i></button>
      </div>
      <div className='homepage_input'>
        <input ref={textInput} onChange={handleChange} type="text"/>
        <button>🔍</button>
      </div>
      <button className={`homepage_menu ${menu && 'active'}`} onClick={handleMenu}><i class='bx bx-menu-alt-right'></i></button>
      <div className='homepage_container'>
        {
          products?.filter(cbFilter).map((prod) => (
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

export default HomePage;