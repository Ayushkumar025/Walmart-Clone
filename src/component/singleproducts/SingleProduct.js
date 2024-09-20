import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './SingleProduct.css'

function SingleProduct() {
    const {state}=useLocation();  
  return (
    <>
        <main className='product-container'>
          <div className='container'>
            <div className='sub-container'>
              <div className='sub'>
                <img src='./images/sub-1.jpeg'></img>
              </div>
              <div className='sub'>
                <img src='./images/sub-2.jpeg'></img>
              </div>
              <div className='sub'>
                <img src='./images/sub-3.jpeg'></img>
              </div>
              <div className='sub'>
                <img src='./images/sub-4.jpeg'></img>
              </div>
            </div>
            <div className='box-2'>
              <img src='./images/h-1.webp'></img>
            </div>
            <div className='box-3'></div>
          </div>
        </main>
    </>
  )
}

export default SingleProduct
