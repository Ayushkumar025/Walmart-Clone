import React from 'react'
import './Home.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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
          <div className='second-img'>
            <a href='#'>
              <img src='./images/small-kid.jpg' alt='small-kid'></img>
              <div className='text-overlay'>
                <h5>Only at Walmart-<br></br>wohoo!</h5>
                <p>Shop Toys</p>
              </div>
            </a>
          </div>
          <div className='third-img'>
            <a href='#'>
              <img src='./images/dino.jpg' alt='dinosaur'></img>
              <div className='text-overlay'>
                <h6>Big fun for ages 5-7</h6>
                <p>Shop now</p>
              </div>
            </a>
          </div>
        </div>
        <div className='second'>
          <div className='II-img-1'>
            <a href='#'>
              <img src='./images/iphone-16.jpg' alt='iphone-16'></img>
              <div className='text-overlay'>
                <p>Save up to $1,100</p>
                <span>Profoundly<br></br> Powerful.</span>
                <div className='order'>
                  <p>Preorder now</p>
                </div>
              </div>
            </a>
          </div>
          <div className='II-img-2'>
            <div className='inner-div'>
              <div className='inner-image-1'>
                <a href='#'>
                  <img src='./images/bottles.jpg'></img>
                  <div className='text-overlay'>
                    <h6>Owala: trending with every<br></br> sip</h6>
                    <p>Shop now</p>
                  </div>
                </a>
              </div>
              <div className='inner-image-2'>
                <a href='#'>
                  <img src='./images/purse.jpg'></img>
                  <div className='text-overlay'>
                    <h6>Upto 40% off</h6>
                    <p>Shop now</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='II-img-3'>
            <a href='#'>
              <img src='./images/walmart+.webp'></img>
              <div className='text-overlay'>
                <span>Walmart+ members save big with free<br></br> delivery from stores</span>
                <p className='terms'>Terms apply.</p>
                <p className='join'>Join Walmart+ </p>
              </div>
            </a>
          </div>
        </div>
        <div className='third'>
          <div className='first-img'>
            <a href='#'>
              <img src='./images/lady.jpg' alt='img' className='image-1'></img>
              <div className='text-overlay'>
                <h6>Ree's fashion<br></br> refresh</h6>
                <p>Shop now</p>
              </div>
            </a>
          </div>
          <div className='second-img'>
            <a href='#'>
              <img src='./images/products.jpg' alt='products'></img>
              <div className='text-overlay'>
                <h6>Latest luxe beauty<br></br> lineup</h6>
                <p>Shop now</p>
              </div>
            </a>
          </div>
          <div className='third-img'>
            <a href='#'>
              <img src='./images/lebron.jpg' alt='boat'></img>
              <div className='text-overlay'>
                <h6>Just-dropped Beats</h6>
                <p>Shop now</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
    <div className='owl'>
      <OwlCarousel className='owl-theme' items={6} loop margin={10} nav>
      <div class='item'>
        <div className='image'>
          <img src='./images/bed.webp'></img>
        </div>
          <h4>1</h4>
      </div>
      <div class='item'>
      <div className='image'>
          <img src='./images/bed.webp'></img>
        </div>
          <h4>2</h4>
      </div>
      <div class='item'>
      <div className='image'>
          <img src='./images/bed.webp'></img>
        </div>
          <h4>3</h4>
      </div>
      <div class='item'>
      <div className='image'>
          <img src='./images/bed.webp'></img>
        </div>
          <h4>4</h4>
      </div>
      <div class='item'>
      <div className='image'>
          <img src='./images/bed.webp'></img>
        </div>
          <h4>5</h4>
      </div>
      <div class='item'>
      <div className='image'>
          <img src='./images/bed.webp'></img>
        </div>
          <h4>6</h4>
      </div>
      <div class='item'>
      <div className='image'>
          <img src='./images/bed.webp'></img>
        </div>
          <h4>7</h4>
      </div>
      <div class='item'>
      <div className='image'>
          <img src='./images/bed.webp'></img>
        </div>
          <h4>8</h4>
      </div>
      <div class='item'>
      <div className='image'>
          <img src='./images/bed.webp'></img>
        </div>
          <h4>9</h4>
      </div>
      <div class='item'>
      <div className='image'>
          <img src='./images/bed.webp'></img>
        </div>
          <h4>10</h4>
      </div>
      <div class='item'>
      <div className='image'>
          <img src='./images/bed.webp'></img>
        </div>
          <h4>11</h4>
      </div>
      <div class='item'>
      <div className='image'>
          <img src='./images/bed.webp'></img>
        </div>
          <h4>12</h4>
      </div>
      </OwlCarousel>;
    </div>
    <div className='multi-carousel'>
    <Carousel
      responsive={responsive}
      infinite={true}
    >
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;
    </div>
    </>
  )
}

export default Home
