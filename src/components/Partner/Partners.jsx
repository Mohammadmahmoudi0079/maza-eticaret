import React from 'react'
import image1 from '../../assets/Brand/br-1.png'
import image2 from '../../assets/Brand/br-2.png'
import image3 from '../../assets/Brand/br-3.png'
import image4 from '../../assets/Brand/br-4.png'
import image5 from '../../assets/Brand/br-5.png'
const Partners = () => {
  return (
    <div className='my-10 w-full'>
        <div className='bg-gray-300 dark:bg-gray-600'>
            <div className='container'>
                <div className='py-7 pl-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center opacity-40 dark:opacity-80'>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image5} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners
