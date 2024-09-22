import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './SingleProduct.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function SingleProduct() {
    const {state}=useLocation(); 
    const product = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };
  return (
    <>
        <main className='product-container'>
          <div className='container'>
            <div className='box-1'>
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
              <Carousel
                responsive={product}
                infinite={true}
              > 
                <div className='item'>
                  <div className='image'>
                    <img src='./images/h-1.webp'></img>
                    </div>
                </div>
                <div className='item'>
                  <div className='image'>
                    <img src='./images/h-2.webp'></img>
                    </div>
                </div>
                <div className='item'>
                  <div className='image'>
                    <img src='./images/h-3.webp'></img>
                    </div>
                </div>
                <div className='item'>
                  <div className='image'>
                    <img src='./images/h-4.webp'></img>
                    </div>
                </div>
              </Carousel>
            </div>
            <div className='box-3'>
              <div className='div-1'>
                <span className='best-seller'>
                  Best seller
                </span>
              </div>
              <div className='div-2'>
                <a href='#'>Way To Celebrate</a>
              </div>
              <div className='div-3'>
                <h1>Halloween 10-Count Orange Pumpkin Lantern LED Lights, 6.5', by Way To Celebrate</h1>
              </div>
              <div className='div-4'>
                <img src='./images/refresh.svg'></img>
                <span>Free 90-day returns</span>
              </div>
              <div className='div-5'>
                <h1>$10.98</h1>
              </div>
              <div className='div-6'>
                <span>Add to cart</span>
              </div>
            </div>
          </div>
        </main>
    </>
  )
}

export default SingleProduct
