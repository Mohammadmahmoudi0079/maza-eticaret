import React from 'react'
import {IoMdSearch} from 'react-icons/io'
import { Link } from 'react-router-dom';
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from './DarkMode';

const MenuLinks =[
  {
    id: 1 ,
    name:  "Home",
    link: "/"
  },
  {
    id: 2 ,
    name:  "Shop",
    link: "/shop"
  },
  {
    id: 3 ,
    name:  "About",
    link: "/about"
  },
  {
    id: 4 ,
    name:  "Blogs",
    link: "/#blogs"
  }
];
const DropDownLinks =[
  {
    id: 1 ,
    name:  "Trending Products",
    link: "/#"
  },{
    id: 2 ,
    name:  "best Sellers",
    link: "/#"
  },{
    id: 3 ,
    name:  "Top Rated",
    link: "/#"
  },
]

function Navbar() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
        <div className='container flex justify-between'>
          {/* Logo and link section */}
          <div className='flex  item-center gap-4'>
            <a href='#' className='text-purple dark:text-pink-500 font-semibold tracking-widest text-2xl uppercase sm:text-3xl '>Maza</a>
            {/* Menu items*/}
            <div className='hidden lg:block'>
              <ul className='flex items-center  gap-4'>
                {
                  MenuLinks.map((data,index)=>(
                  <li className='mt-2' key={index}>
                     <Link
                        to={data.link}
                        className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                        {data.name}
                      </Link>
                  </li>
                  ))}
                  {/* Dropdown menu */}
                  <li className='mt-2 relative cursor-pointer group items-center'>
                    <a href='#' 
                       className='flex items-center gap-[2px] font-semibold text-gray-500
                                dark:hover:text-white py-2'>
                      Quick Links
                      <span className='ml-1'>
                      <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                    </span>
                    </a>
                    {/* Dropdown links */}
                    <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white '>
                      <ul className='space-y-2'>
                        {
                          DropDownLinks.map((data,index)=>(
                            <li key={index}>
                              <a 
                              className='text-gray-500 hover:text-black dark:hover:text-white 
                              duration-200 inline-block w-full p-2  hover:bg-purple/20 rounded-md font-semibold'
                              href={data.link}>{data.name}
                               </a>
                            </li>

                          ))
                        }
                      </ul>

                    </div>
                    
                  </li>
              </ul>
            </div>
          
          </div>

          {/* navbar right section */}
          <div className='flex justify-between items-center gap-4'>
            {/* searchbar section */}
            <div className='relative group  sm-block'>
              <input type="text" placeholder='Search' className='search-bar ' />
              <IoMdSearch className='text-xl text-gray-600 dark:text-gray-400 group-hover:text-primary duration-200 absolute top-1/2 -translate-y-1/2 right-3'/>
            </div>
            {/* order-button-section */}
          
            <button>
              <FaShoppingCart className='text-xl text-gray-600 dark:gray-400'/>
              <div className='absolute top-0 h-4 w-4 bg-red-600 rounded-full items-center text-xs mt-4
               ml-3'>4</div>
            </button>
            
            {/* dark mode section */}
              <div className='mb-5 '>
              <DarkMode/>
              </div>          
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
