import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/free-mode'

import { carousel } from '../data';


export default () => {
  const [slidesPerViev, SetSlidesPerViev] = React.useState(4)
  // const [prods, setProds] = useState(carousel)
  // const [error, setError] = React.useState()
  // React.useEffect(() => {
  //   async function loadProds() {
  //     try {
  //       const data = await carousel
  //       setProds(data)
  //     } catch (err) {
  //       setError(err)
  //     }
  //   }

  //   loadProds()
  // }, [])

  const productElements = carousel.map(prod => (
    <SwiperSlide key={prod.id}>
      <Link to={`/categories/${prod.id}`} >
        <div key={prod.id}>
          <div className=' h-[320px] overflow-hidden rounded-lg'>
            <img
              className='w-full h-full object-cover'
              src={prod.image}
              alt="carousel-Card-Image"
            />
          </div>
          <div className='p-3 font-medium text-[18px]'>
            <h3 className='text-xl '>{prod.title}</h3>
            <span>{prod.persons}</span>
            <span className='mr-2'>,</span>
            <span>{prod.length}</span>
            <h4>{prod.price}</h4>
          </div>
        </div>
      </Link>
    </SwiperSlide>
  ))

  const resize = () => {
    if (window.innerWidth <= 640) {
      SetSlidesPerViev(1)
    } else if (window.innerWidth <= 1024) {
      SetSlidesPerViev(3)
    } else {
      SetSlidesPerViev(4)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', resize);
    resize()
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [])


  return (
    <div className='px-[45px] lg:px-[90px]'>
      <h2 className='mb-3'
      >Popular Tour Offers</h2>
      <Swiper
        modules={[Navigation, FreeMode]}
        navigation
        freeMode={true}
        spaceBetween={20}
        slidesPerView={slidesPerViev}
        className='-mx-[45px] px-[45px] lg:-mx-[90px] lg:px-[90px]'
      >
        <div>
          {productElements}
        </div>
      </Swiper>
    </div>
  );
};