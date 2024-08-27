import React, { useContext, useEffect, useState } from 'react';
import Style from './ProductDetalis.module.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Slider from "react-slick";
import { useQuery } from '@tanstack/react-query';
import useProductDetalis from '../../Hooks/useProductDetalis';
import { CartContext } from '../../Context/CartContext';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet';

export default function ProductDetalis() {
  let { id } = useParams();
  const [productDetails, setProductDetails] = useState({});
  

  async function getProductDetails(id) {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    console.log(data);
    setProductDetails(data.data)

  }
  useEffect(() => {
    getProductDetails(id)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <ul>
        {dots.slice(0, 3)}
      </ul>
    ),

  };

  return (
    <>

      <div className="row ">
        <div className='w-full px-4 md:px-0 md:w-1/4'>
          <Slider {...settings}>
            {productDetails.images?.map((image, index) => <img key={index} src={image} className='w-full p-10' />)}
          </Slider>
        </div>
        <div >
          <h1 className='text-center md:text-left text-lg font-semibold text-gray-800'>{productDetails.title}</h1>
          <p className='text-gray-600 text-lg mt-4 w-full'>{productDetails.description}</p>
          <div className="flex justify-between items-center py-6 px-2">
            <span className='text-lg'>{productDetails?.price} EGP</span>
            <span className='flex items-center gap-x-[.20rem] text-lg'>{productDetails.ratingsAverage} </span>
          </div>
          <button onClick={() => addProductToCart(product.id)} className='btn mb-2 w-full bg-main '>Add to Cart </button>
        </div>
      </div>
    </>
  );
}
 