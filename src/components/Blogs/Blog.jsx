import React from 'react';

const Blog = ({ image, title, summery, date }) => {
  return (
    <div>
      <div className='relative'>
        <div>
          {/* Adjust the transition and hover effect to smoothly enlarge the image */}
          <img 
            src={image} 
            alt="" 
            className='rounded-2xl h-[180px] w-[360px] transition-transform duration-500 hover:scale-105' 
          />
          <div>
            <p className='mt-2 font-thin text-sm'>{date}</p>
            <h1 className='font-semibold text-2xl'>{title}</h1>
            <p className='text-gray-600 dark:text-gray-500 overflow-hidden text-ellipsis max-h-[3rem] leading-5'
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}>
              {summery}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
