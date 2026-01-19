import React from 'react'
import image1 from '../../assets/Category/earphone.png'
import image2 from '../../assets/Category/watch.png'
import image3 from '../../assets/Category/macbook.png'
import image4 from '../../assets/Category/gaming.png'
import image5 from '../../assets/Category/vr.png'
import image6 from '../../assets/Category/speaker.png'

import CategoryCard from './CategoryCard'

function Category() {
  return (
    <div>
      {/* Row  1 */}
      <div className='py-8'>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Column 1 */}
          <CategoryCard  image={image1} imageLoc={"bottom-0"} colSpan={"col-span-1"} 
                        bgFrom={"from-black/90"} bgTo={"to-black/70"} txt={"Headphone"} 
                        txt1Color={"text-gray-400"} txt3Color={"text-gray-400"}
                         txtOpacity={"opacity-20"} bgButton={"bg-red-500"}/>
          {/* Column 2 */}
          <CategoryCard  image={image2} imageLoc={"top-0 -right-10"} colSpan={"col-span-1"} 
                        bgFrom={"from-yellow-500"} bgTo={"to-yellow-100"} txt={"Gadget"} 
                        txt1Color={"text-gray-500"} txt3Color={"text-gray-500"} 
                        txtOpacity={"opacity-60"} bgButton={"bg-white"} txtColorButton={"text-yellow-500"}/>
          {/* Column 3 */}
          <CategoryCard  image={image3} imageLoc={"top-0 -right-[10px]"} colSpan={"col-span-2"} 
                        bgFrom={"from-purple"} bgTo={"to-white"} txt={"Laptop"} 
                        txt1Color={"text-gray-300"} txt3Color={"text-gray-100"} 
                        txtOpacity={"opacity-40"} bgButton={"bg-white"} txtColorButton={"text-purple"}/>
          </div>
        </div>
      </div>

      {/* Row  2 */}
      <div className='py-8'>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Column 1 */}
          <CategoryCard  image={image4} imageLoc={"right-2 bottom-0 "} colSpan={"col-span-2"} 
                        bgFrom={"from-gray-300"} bgTo={"to-white"} txt={"Gaming"} 
                        txt1Color={"text-gray-400"} txt3Color={"text-gray-400"}
                         txtOpacity={"opacity-60"} bgButton={"bg-red-500"}/>
          {/* Column 2 */}
          <CategoryCard  image={image5} imageLoc={"bottom-0 right-0 w-[500px]"} colSpan={"col-span-1"} 
                        bgFrom={"from-green-500"} bgTo={"to-green-100"} txt={"Virtual Reality"} 
                        txt1Color={"text-gray-500 "} txt3Color={"text-gray-500 mb-20"} 
                        txtOpacity={"opacity-60"} bgButton={"bg-white"} txtColorButton={"text-green-500"}/>
          {/* Column 3 */}
          <CategoryCard  image={image6} imageLoc={"bottom-0 w-[200px] right-0"} colSpan={"col-span-1"} 
                        bgFrom={"from-blue-500"} bgTo={"to-white"} txt={"Speaker"} 
                        txt1Color={"text-gray-300"} txt3Color={"text-gray-100 mb-20"} 
                        txtOpacity={"opacity-40"} bgButton={"bg-white"} txtColorButton={"text-blue-500 "}/>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Category