//React
import React from 'react'
//Components
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Category from '../components/Category/Category'
import Services from '../components/Services/Services'
import Banner from '../components/Banner/Banner'
import Heading from '../components/Shared/Heading'
import Products from '../components/Product/Products'
import Blogs from '../components/Blogs/Blogs'
import Partners from '../components/Partner/Partners'
//assets data
import image1 from '../assets/Category/headphone.png'
import image2 from '../assets/Category/smartwatch.png'
import Footer from '../components/Footer/Footer'


const BannerData1 = {
    discount:"30% OFF",
    title : "Fine Smile",
    date : "10 Jan to 28 Jan",
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4:"Some Description About Headphone which will be written in two or three lines cause it must be longs",
    bgColor:"bg-red-500",
    image : image1,
    txtButtonColor:"text-red-500"
}
const BestSellerHeadingData ={
    title:"Best Seller Products",
    subtitle:"some description about best sellers "
}

const BannerData2 = {
    discount:"30% OFF",
    title : "Happy Hours",
    date : "10 Jan to 28 Jan",
    title2: "Smart Solo",
    title3: "Winter Sale",
    title4:"Some Description About Smartwatch which will be written in two or three lines cause it must be longs",
    bgColor:"bg-green-400",
    image : image2,
    txtButtonColor:"text-green-400"
}
const NewsHeadingData = {
    title:"Recent News",
    subtitle:"Some explanation about recent news"
}

const Home = () => {
  return (
    
      <div >
      <Navbar/>
      <Hero/>
      <Category/>
      <Services/>
      <Banner data = {BannerData1}/>
      <Heading data= {BestSellerHeadingData} />
      <Products/>
      <Banner data={BannerData2}/>
      <Heading data= {NewsHeadingData} />
      <Blogs/>
      <Partners/>
      <Footer/>

      </div>
      
      )
}

export default Home