import React from 'react'

const Heading = ({title,subtitle}) => {
  return (
    <div className='container '>
      <div className='my-5'>
      <h1 className=' text-gray-800 dark:text-white text-center text-4xl font-bold uppercase'>{title}</h1>
      <h2 className='text-gray-800 dark:text-white text-center font-semibold'>{subtitle}</h2>
    </div>
    </div>
  )
}

export default Heading
