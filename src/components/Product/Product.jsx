import React from 'react'
import image1 from '../../assets/Product/p-1.jpg'
import Button from '../Shared/Button'
import Heading from '../Shared/Heading';

const Product = () => {
    return (
    <div>
      <div className=''>
        <div className='relative'>
          <div className="max-w-[300px] max-h-[220px] min-w-[250] relative inline-block group">
            <img
              src={image1}
              alt="Product Image"
              className="hover:blur-sm transition duration-200"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Button text={"Buy Now"} textColor={"text-white"} bgColor={"bg-purple"} />
            </div>
          </div>
          <div className="mt-5 flex flex-col">
            <p className="font-semibold text-gray-700 dark:text-white">Beats Headphone</p>
            <p className="font-semibold text-gray-700 dark:text-white">$129</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
