import React from 'react'
import { FaGithub, FaHeart, FaInstagram, FaLinkedin, FaLocationArrow, FaMobile } from 'react-icons/fa'
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom'
import Button from '../Shared/Button'
const Footer = () => {
  return (
    <div >
      <div className='container mt-[50px] mb-[60px]'>
        <div className='grid grid-cols-3 md:grid-cols-4 lg-grid-cols-4 sm:grid-cols-4 pl-10 gap-4 md:text-md sm:text-sm text-sm lg:text-xl text-gray-600'>
            {/* Col 1 */}
            <div className='space-y-2'>
                <Link className='text-purple font-bold dark:text-pink-500'>MAZA</Link>
                <p className='text-sm  '>In a world where technology evolves rapidly, staying ahead means constantly innovating.</p>
                <p className='text-sm'>Made with <FaHeart className='text-red-700'/> By Mohammad Reza Mahmoudi</p>
            </div>
            {/* col 2 */}
            <div className='space-y-2'>
                <h1 className='font-bold'>Important Links</h1>
                <div  className='flex flex-col space-y-2 text-blue-600'>
                <Link>Home</Link>
                <Link >About</Link>
                <Link>Contact</Link>
                <Link>Blog</Link>
                </div>
                
            </div>
            {/* col 3 */}
            <div className='space-y-2'>
                <h1 className='font-bold '>Links</h1>
                <div  className='flex flex-col space-y-2 text-blue-600'>
                <Link>Home</Link>
                <Link >About</Link>
                <Link>Contact</Link>
                <Link>Blog</Link>
                </div>
                
                
            </div>
            {/* col 4 */}
            <div className='space-y-3'> 
            <h1 className='font-bold '>Contact</h1>
                <div className='flex items-center space-x-2 '>
                        
                        <div>
                            <FaLocationArrow/>
                        </div>
                        <div>
                            <p>Kadıköy,İstanbul</p>
                        </div>
                </div>
                <div className='flex items-center space-x-2'>
                        
                        <div>
                            <FaMobile/>
                        </div>
                        <div>
                            <p>0541-195-9307</p>
                        </div>
                </div>    
                    <div className='flex text-3xl space-x-5 '>
                        <a 
                        href="https://www.linkedin.com/in/mohammad-reza-mahmoudi-382476249"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaLinkedin className='text-blue-900 dark:text-blue-600'/></a>
                        <a href="https://www.instagram.com/mamrez_3479/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <FaInstagram className='text-pink-600'/></a>
                        
                        <a href="mailto:mohammadmahmoudi0079@gmail.com"><SiGmail className='text-red-600 '/></a>
                        <a href="https://github.com/Mohammadmahmoudi0079/" target="_blank" rel="noopener noreferrer"><FaGithub/> </a>
                    </div> 
            </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
