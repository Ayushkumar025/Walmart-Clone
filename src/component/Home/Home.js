import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
    <main>
      <section className='main'>
        <div className='first'>
          <div className='first-img'>
            <a href='#'>
              <img src='./images/goat.jpg' alt='goat' className='image-1'></img>
              <div className='text-overlay'>
                <h6>The Top Toy List is <br></br> here</h6>
                <p>Shop now</p>
              </div>
            </a>
          </div>
        </div>

          <div className='second-img'>
            <a href='#'>
            <img src='./images/small-kid.jpg' alt='small-kid'></img></a>
          </div>
          <div className='third-img'>
            <a href='#'><img src='./images/dino.jpg' alt='dinosaur'></img></a>
          </div>
  
        <div className='second'>
          <div className='II-img-1'>
            <a href='#'><img src='./images/iphone-16.jpg' alt='iphone-16'></img></a>
          </div>
          <div className='II-img-2'>
            <div className='inner-div'>
              <div className='inner-image-1'>
                <a href='#'><img src='./images/bottles.jpg'></img></a>
              </div>
              <div className='inner-image-2'>
                <a href='#'><img src='./images/purse.jpg'></img></a>
              </div>
            </div>
          </div>
          <div className='II-img-3'>
            <a href='#'><img src='./images/walmart+.webp'></img></a>
          </div>
        </div>
        <div className='third'>
          <div className='III-img-1'>
            <a href='#'><img src='./images/lady.jpg'></img></a>
          </div>
          <div className='III-img-2'>
            <a href='#'><img src='./images/products.jpg'></img></a>
          </div>
          <div className='III-img-3'>
            <a href='#'><img src='./images/lebron.jpg'></img></a>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Home
