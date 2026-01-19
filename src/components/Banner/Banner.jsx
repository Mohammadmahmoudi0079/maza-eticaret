import React from 'react'
import Button from '../Shared/Button'

const Banner = ({data}) => {
  return (
    <div className='min-h-[400px] flex justify-center items-center py-12 '>
      <div className='container '>
        <div className={` grid md:grid-cols-3 gap-6 items-center text-white rounded-3xl ${data.bgColor}`}>
            {/* col 1 */}
                <div className='ml-10 gap-y-3 '>
                    <p className='opacity-80 font-semibold'>{data.discount}</p>
                    <p className=' mt-5 text-5xl lg:text-7xl font-bold uppercase'>{data.title}</p>
                    <p className=' mt-5 opacity-80 font-semibold'>{data.date}</p>
                </div>
            {/* col 2 */}
                <div>
                    <img src={data.image} alt="" className='drop-shadow-[-10px_6px_10px_rgba(0,0,0,.8)] transform scale-100 -m-4 transition-transform duration-500 hover:scale-110'/>
                </div>
            {/* col 3 */}
                <div className=''>
                    <p className='text-lg font-semibold opacity-80 mt-5'>{data.title2}</p>
                    <p className='text-5xl font-bold mt-5'>{data.title3}</p>
                    <p className='opacity-80 font-semibold mt-5'>{data.title4}</p>
                    <Button bgColor={"bg-white"} text={"Shop"} textColor={`${data.txtButtonColor} mt-5 mb-5`}></Button>
                </div>

        </div>
      </div>
    </div>
  )
}

export default Banner
