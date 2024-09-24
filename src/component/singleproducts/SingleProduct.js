import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './SingleProduct.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { GiRoundStar } from "react-icons/gi";
import data from '../data/data';
import { MdPadding } from 'react-icons/md';

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
    const [flashes,setflashes]=useState([
      {
        id:1,
        image:state?.subimage1,
        isActive:true,
        value:1
      },
      {
        id:2,
        image:state?.subimage2,
        isActive:false,
        value:0
      },
      {
        id:3,
        image:state?.subimage3,
        isActive:false,
        value:0
      },
      {
        id:4,
        image:state?.subimage4,
        isActive:false,
        value:0
      },
    ])

    function Update(id){
      const data=flashes.map((ele)=>{
        if(ele.id==id){
          return {
            ...ele,
            isActive:true,
            value:1
          }
        }else{
          return {
            ...ele,
            isActive:false,
            value:0,
          }
        }
      })
      setflashes(data)
    }
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
              {flashes.map((ele)=>{
                return (<div className='sub' onClick={()=>Update(ele.id)}>
                <img src={ele?.image} style={{border:ele.isActive && '2px solid blue'}}></img>
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
                  {JSON.parse(JSON.stringify(flashes)).sort((a,b) => b.value - a.value).map((ele,i)=>{
                    return (<div className='image' >
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
                <h1>{state?.description}</h1>
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
                <h1>${state?.price}</h1>
              </div>
              <div className='div-6'>
                <span>Add to cart</span>
              </div>
              <div className='div-7'>
                <div className='heading'>
                  <h1 style={{fontSize:'20px'}}>How do you want your item</h1>
                </div>
                <div className='sub'>
                  <div className="sub-upper">
                    <img src="./images/truck.png" width={32} height={32}></img>
                    <h5>Shipping</h5>
                    <span>Arives in 5 days</span>
                  </div>
                  <div className="sub-upper">
                    <img src="./images/car.png" width={32} height={32}></img>
                    <h5>Pickup</h5>
                    <span>Available</span>
                  </div>
                  <div className="sub-upper">
                    <img src="./images/bag.png" width={32} height={32}></img>
                    <h5>Delivery</h5>
                    <span>Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <section className='about'>
            <div className='heading' style={{padding:'30px'}}>
              <h1>About this item</h1>
            </div>
            <hr style={{marginLeft:'30px', marginRight:'30px'} }></hr>
            <div className='main'>
              <div className='sub-heading'>
                <span>Product details</span>
              </div>
              <div className='detail'>
                <p>{state?.aboutitem}</p>
              </div>
            </div>
          </section>
        </main>
    </>
  )
}

export default SingleProduct
