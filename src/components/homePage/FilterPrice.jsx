import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/filterPrice.css'

const FilterPrice = ({setInputPrice}) => {

   const {handleSubmit, register} = useForm();

   const submit = (data) => {
        setInputPrice({
            min: data.min,
            max: data.max || Infinity,
        });
   };

  return (
    <form className='filterprice' onSubmit={handleSubmit(submit)}>
        <h3 className='filterprice_title'>Price</h3>
        <hr />
        <div className='filterpice_input'>
            <label htmlFor="min">From</label>
            <input {...register('min')} id='min' type="text" />
        </div>
        <div className='filterpice_input'>
            <label htmlFor="max">To</label>
            <input {...register('max')} id='max' type="text" />
        </div>
        <button>Filter price</button>
    </form>
  )
}

export default FilterPrice