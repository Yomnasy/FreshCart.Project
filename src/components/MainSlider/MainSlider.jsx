import React, { useContext, useEffect, useState } from 'react';
import Style from './MainSlider.module.css';
import slid1 from '../../assets/images/sy40.jpg'
import slid2 from '../../assets/images/sy20.jpg'
import slid3 from '../../assets/images/sy50.jpg'
import slid4 from '../../assets/images/sy60.jpg'
import slid5 from '../../assets/images/sy30.jpg'
import Slider from "react-slick";
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import useRecentProduct from '../../Hooks/useRecentProduct';



export default function MainSlider() {



  async function getRecentProduct(){
    return await axios.get('https://ecommerce.routemisr.com/api/v1/products');
   }
  
   let { error, isError, isLoading, isFetching } = useQuery({
    queryKey: ['recentProduct'],
    queryFn: getRecentProduct,
 
  });

   var settings = {
     dots: true,
     infinite: true,
     speed: 800,
     slidesToShow: 1, 
     slidesToScroll: 1,
     autoplay: false,
     arrows:false,
     
    };
    if(isLoading || isFetching){
      return null
    }
    
    return <>
      <div className="flex justify-center  py-4 m-4 my-6   ">
        <div className=' w-1/4 '>
      <Slider {...settings}>
        <img className='w-fit h-[200px] lg:h-[400px] ' src={slid1} alt="slideimg" />
        <img className='w-fit h-[200px] lg:h-[400px] ' src={slid2} alt="slideimg" />
        <img className='w-fit h-[200px] lg:h-[400px] ' src={slid3} alt="slideimg" />
      </Slider>
      </div>
      <div className='md:w-1/4 w-full mt-6 md:mt-0'>
      <img className='object-cover w-full h-[160px] lg:h-[200px]' src={slid4} alt="slideimg" />
      <img className='object-cover w-full mt-4 md:mt-0 h-[150px] lg:h-[200px]' src={slid5} alt="slideimg" />
      </div>
    </div>
   
  </>
}
