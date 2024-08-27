import React, { useContext, useEffect, useState } from 'react';
import Style from './Orderss.module.css';
import { CartContext } from '../../Context/CartContext';


export default function Orderss() {
  let { clearCart } = useContext(CartContext);
  useEffect(() => {
    clearCart()
  }, [])


  return <>

    <h1 className="text-3xl">Allorders</h1>
  </>
}
