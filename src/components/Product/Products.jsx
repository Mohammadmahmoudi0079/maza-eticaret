import React from 'react'
import Product from './Product'
import Heading from '../Shared/Heading'

const Products = () => {
  return (
    <div>
    <Heading title={"Best Selling Products"} subtitle={"some description about best sellers "}/>
    <div className='py-8'>

        <div className='container'>
        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
            <Product/>
            <Product/>
            <Product/>
            <Product/>

            <Product/>
            <Product/>
            <Product/>
            <Product/> 
        </div>
        </div>
    </div>
    </div>
  )
}

export default Products
