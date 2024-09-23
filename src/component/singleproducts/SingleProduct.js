import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './SingleProduct.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { GiRoundStar } from "react-icons/gi";

function SingleProduct() {
    const {state}=useLocation(); 
    const product = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };
    const slider = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
    };
    const images=[
      {
        id:1,
        image:'./images/h-1.webp',
        isActive:false
      },
      {
        id:2,
        image:'./images/h-2.webp',
        isActive:false
      },
      {
        id:3,
        image:'./images/h-3.webp',
        isActive:false
      },
      {
        id:4,
        image:'./images/h-4.webp',
        isActive:false
      },
    ]
    const mini=[
      {
        id:1,
        image:'./images/p-1.webp',
      },
      {
        id:2,
        image:'./images/p-2.webp',
      },
      {
        id:3,
        image:'./images/p-3.webp',
      },
      {
        id:4,
        image:'./images/p-4.webp',
      }
    ]
  return (
    <>
        <main className='product-container'>
          <div className='container'>
            <div className='box-1'>
              {images.map((ele)=>{
                return (<div className='sub'>
                <img src={ele?.image}></img>
              </div>)
              })}
            </div>
            <div className='box-2'>
              <Carousel
                responsive={product}
                wipeable={true}
                draggable={true} 
                infinite={true}
                mouseDrag={true}
              > 
                  {images.map((ele,i)=>{
                    return (<div className='image'>
                    <InnerImageZoom src={ele?.image} zoomType='hover' />
                  </div>)
                  })}
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
              <div className='star'>
                <div className='star-1'>
                  <GiRoundStar />
                  <GiRoundStar />
                  <GiRoundStar />
                  <GiRoundStar />
                  <GiRoundStar />
                </div>
                <div className='star-2'>
                  <span>(5.0)</span>
                </div>
                <div className='star-3'>
                  <span>14 reviews</span>
                </div>
              </div>
              <div className='div-4'>
                <div className='div-4-1'>
                  <img src='./images/refresh.svg'></img>
                </div>
                <div className='div-4-2'>
                  <span>Free 90-day returns</span>
                </div>
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
        <section className='container-2'>
          <div className='first'>
            <h1>Popular items in this category</h1>
            <span>Best selling items that customers love</span>
          </div>
          <div className='second'>
            <span className='best-seller'>
              Best seller
            </span>
          </div>
          <div className='slider'>
            <Carousel
                responsive={slider}
                infinite={true}
            >
              {mini.map((ele,i)=>{
                return (
                  <div class='item'>
                    <div className='image'>
                      <img src={ele?.image}></img>
                    </div>
                    <div className='text'>
                      <h5>$19.98</h5>
                      <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                    </div>
                  </div>)
              })}
            </Carousel>
          </div>
        </section>
    </>
  )
}

export default SingleProduct
