import React, { useState, useRef, useEffect } from 'react'
import Slider from 'react-slick'
import image1 from '../../assets/Hero/headphone.png'
import image2 from '../../assets/Hero/watch.png'
import image3 from '../../assets/Hero/macbook.png'
import Button from '../Shared/Button'

const HeroData = [
    {
        id: 1,
        img: image1,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Headphone",
    },
    {
        id: 2,
        img: image2,
        subtitle: "i-watch",
        title: "smart watch",
        title2: "watch",
    },
    {
        id: 3,
        img: image3,
        subtitle: "Apple",
        title: "Macbook",
        title2: "Laptop",
    },
]

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const sliderRef = useRef(null)
    const timerRef = useRef(null)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'ease-in-out',
        pauseOnHover: true,
        pauseOnFocus: true,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex)
        },
    }

    const changeSlide = () => {
        if (sliderRef.current) {
            const nextSlide = (currentSlide + 1) % HeroData.length
            sliderRef.current.slickGoTo(nextSlide)
        }
    }

    const resetTimer = () => {
        clearTimeout(timerRef.current)
        timerRef.current = setTimeout(changeSlide, 10000)
    }

    useEffect(() => {
        resetTimer()

        return () => clearTimeout(timerRef.current)
    }, [currentSlide])

    return (
        <div className='container'>
            <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
                {/* Hero section */}
                <div className='container pb-8 sm:pb-0'>
                    <Slider ref={sliderRef} {...settings}>
                        {HeroData.map((data) => (
                            <div key={data.id}>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    {/* text content section */}
                                    <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                        <h1 className='text-2xl sm:text-6xl lg:text-2xl text-gray-800 font-bold dark:text-gray-200'>
                                            {data.subtitle}
                                        </h1>
                                        <h1 className='text-5xl sm:text-6xl lg:text-7xl text-gray-800 font-bold dark:text-gray-200'>
                                            {data.title}
                                        </h1>
                                        <h1 className='text-5xl uppercase text-white dark:text-gray-500 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold z-0'>
                                            {data.title2}
                                        </h1>
                                        <div>
                                            <Button text='Shop by Category' textColor='text-white' bgColor='bg-purple' />
                                        </div>
                                    </div>
                                    {/* image section */}
                                    <div className='order-1 sm:order-2'>
                                        <div className='z-40'>
                                            <img
                                                src={data.img}
                                                alt=''
                                                className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg-scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Hero
