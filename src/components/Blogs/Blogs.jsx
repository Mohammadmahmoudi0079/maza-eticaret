import React from 'react';
import Blog from './Blog';
import image1 from '../../assets/Blog/blog-1.jpg';
import image2 from '../../assets/Blog/blog-2.jpg';
import image3 from '../../assets/Blog/blog-3.jpg';
import Heading from '../Shared/Heading';


const Blogs = () => {
  return (
    <div>        
        <Heading title={"Recent News"} subtitle={"Reach Daily Technological News in This Part"}/>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                <Blog date={"28/Jul/2023"} title={"news1"} summery={"this is explanation of news 1 which must be long enugh to have multiple lines"} image={image1} />
                <Blog date={"28/Jul/2023"} title={"news1"} summery={"this is explanation of news 1 which must be long enugh to have multiple lines"} image={image2} />
                <Blog date={"28/Jul/2023"} title={"news1"} summery={"this is explanation of news 1 which must be long enugh to have multiple lines this is explanation of news 1 which must be long enugh to have multiple lines"} image={image3} />
            </div>
        </div>
    </div>
  );
};

export default Blogs;
