import React from 'react'
import './Home.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { CiHeart } from "react-icons/ci";
import { PiToggleRight } from "react-icons/pi";
import HoverVideoPlayer from 'react-hover-video-player';

function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
  const slider3 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9,
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
  const slider4 = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6 // optional, default to 1.
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
  const vidslider = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items:4,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
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
    <section className='container'>
      <div className='container-1'>
        <div className='main-container'>
          <div className='text'>
            <div className='text-1'>
              <h2>Buttery velvets & beyond</h2>
              <p>View all</p>
            </div>
            <div className='text-2'>
              <p>Surround yourself in warmth.</p>
            </div>
          </div>
          <div className='slider-1'>
            <Carousel
              responsive={responsive}
              infinite={true}
              // autoPlay={true}
              // autoPlaySpeed={2000}
              // autoplayHoverPause={true}
              // mousedrag={true}
              // autowidth={true}
            >
              <div class='item'>
                <div className='image'>
                  <img src='./images/table.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$248.00</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/plate.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$24.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/glass.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$17.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/bowl.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$14.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/bowl-1.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$12.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/pillow.jpeg'></img>
                </div>
                <div className='owl-text'>
                  <h5>$14.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/lamp.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$39.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/box.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$14.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/sofa.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$247.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/mirror.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$55.00</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/pot.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$12.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/blanket.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$19.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <div className='img'>
          <div className='inner'>
            <a href='#'>
              <img src='./images/dog.jpg'></img>
              <div className='text-overlay'>
                <p className='simple'>Fall vibes</p>
                <span>Feels like home</span><br></br>
                <button><b>Shop now</b></button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className='container'>
      <div className='container-1'>
        <div className='img'>
            <div className='inner'>
              <a href='#'>
                <img src='./images/paris-hilton.jpg'></img>
                <div className='text-overlay'>
                  <p className='simple'>Live, love, pink</p>
                  <span>Be An Icon</span><br></br>
                  <button><b>Shop now</b></button>
                </div>
              </a>
            </div>
          </div>
        <div className='main-container'>
          <div className='text'>
            <div className='text-1'>
              <h2>Sliving your best life</h2>
              <p>View all</p>
            </div>
            <div className='text-2'>
              <p>Cookware, mini fridges & more.</p>
            </div>
          </div>
          <div className='slider-1'>
            <Carousel
              responsive={responsive}
              infinite={true}
              // autoPlay={true}
              // autoPlaySpeed={2000}
              // autoplayHoverPause={true}
              // mousedrag={true}
              // autowidth={true}
            >
              <div class='item'>
                <div className='image'>
                  <img src='./images/hilton-1.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$248.00</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/hilton-2.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$24.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/hilton-3.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$17.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/hilton-4.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$14.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/hilton-5.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$12.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/hilton-6.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$14.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/hilton-7.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$39.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/hilton-8.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$14.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/hilton-9.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$247.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/hilton-10.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$55.00</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/hilton-11.png'></img>
                </div>
                <div className='owl-text'>
                  <h5>$12.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
              <div class='item'>
                <div className='image'>
                  <img src='./images/hilton-12.webp'></img>
                </div>
                <div className='owl-text'>
                  <h5>$19.98</h5>
                  <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                  <button>+ Add</button>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
    <hr></hr>
    <div className='section'>
      <div className='box'>
        <h3>Get it all right here</h3>
        <p>View all</p>
      </div>
      <div className='slider-3'>
        <Carousel
          responsive={slider3}
          infinite={true}
        >
          <div class='item'>
            <div className='image'>
              <img src='./images/grocery.webp'></img>
            </div>
            <div className='text'>
              <span>Grocery</span>
            </div>
          </div>
          <div class='item'>
            <div className='image'>
              <img src='./images/home.webp'></img>
            </div>
            <div className='text'>
              <p>Home</p>
            </div>
          </div>
          <div class='item'>
            <div className='image'>
              <img src='./images/patio.webp'></img>
            </div>
            <div className='text'>
              <p>Patio & Garden</p>
            </div>
          </div>
          <div class='item'>
            <div className='image'>
              <img src='./images/fashion.webp'></img>
            </div>
            <div className='text'>
              <p>Fashion</p>
            </div>
          </div>
          <div class='item'>
            <div className='image'>
              <img src='./images/electronics.webp'></img>
            </div>
            <div className='text'>
              <p>Electronics</p>
            </div>
          </div>
          <div class='item'>
            <div className='image'>
              <img src='./images/baby.webp'></img>
            </div>
            <div className='text'>
              <p>Baby</p>
            </div>
          </div>
          <div class='item'>
            <div className='image'>
              <img src='./images/toy.webp'></img>
            </div>
            <div className='text'>
              <p>Toys</p>
            </div>
          </div>
          <div class='item'>
            <div className='image'>
              <img src='./images/health.webp'></img>
            </div>
            <div className='text'>
              <p>Health & Wellness</p>
            </div>
          </div>
          <div class='item'>
            <div className='image'>
              <img src='./images/personal.webp'></img>
            </div>
            <div className='text'>
              <p>Personal Care</p>
            </div>
          </div>
          <div class='item'>
            <div className='image'>
              <img src='./images/beauty.webp'></img>
            </div>
            <div className='text'>
              <p>Beauty</p>
            </div>
          </div>
          <div class='item'>
            <div className='image'>
              <img src='./images/tires.webp'></img>
            </div>
            <div className='text'>
              <p>Auto & tires</p>
            </div>
          </div>
          <div class='item'>
            <div className='image'>
              <img src='./images/improvement.webp'></img>
            </div>
            <div className='text'>
              <p>Home Improvement</p>
            </div>
          </div>

        </Carousel>
      
      </div>
    </div>

    <section className='slider-4'>
      <div className='container'>
        <div className='text'>
          <div className='text-1'>
            <h5>Flash Deals</h5>
            <p>View all</p>
          </div>
          <div className='text-2'>
            <p>Up to 65% off</p>
          </div>
          <div className='slider4'>
          <Carousel
              responsive={slider4}
              infinite={true}
          >
            <div class='item'>
              <div className='image'>
                <img src='./images/doll.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/dogg.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/setup.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/bed.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/shirt.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/projector.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/swim.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/shoe.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/carpet.jpeg'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/cam.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/mop.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/blanket.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
          </Carousel>
          </div>
        </div>
      </div>
    </section>

    <section className='slider-4'>
      <div className='container'>
        <div className='text'>
          <div className='text-1'>
            <h5>Popular in household appliances & accessories</h5>
            <p>View all</p>
          </div>
          {/* <div className='text-2'>
            <p>Up to 65% off</p>
          </div> */}
          <div className='slider4'>
          <Carousel
              responsive={slider4}
              infinite={true}
          >
            <div class='item'>
              <div className='image'>
                <img src='./images/e-1.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/e-2.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/e-3.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/e-4.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/e-5.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/e-6.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/e-7.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/e-8.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/e-9.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/e-10.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/e-11.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/e-12.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
          </Carousel>
          </div>
        </div>
      </div>
    </section>
    <hr></hr>

    <section className='halloween'>
      <div className='insider'>
        <div className='first'>
          <div className='first-img'>
            <a href='#'>
              <img src='./images/pumpkin.jpg' alt='img' className='image-1'></img>
              <div className='text-overlay'>
                <p>Pumpkins to parties</p>
                <span>Your Halloween HQ</span><br></br><br></br>
                <button>Shop all</button>
              </div>
            </a>
          </div>
        </div>
        <div className='second'>
          <div className='first-img'>
            <a href='#'>
              <img src='./images/crow.jpg' alt='img' className='image-2'></img>
              <div className='text-overlay'>
                <p className='die'>To-die-for decor</p>
                <span>Home is where <br></br>the haunt is</span>
                <p className='btn'>Shop all</p>
              </div>
            </a>
          </div>
          <div className='second-img'>
            <div className='second-img-1'>
              <a href='#'>
                <img src='./images/candy.jpg' alt='img' className='image-3'></img>
                <div className='text-overlay'>
                  <span>Be the good <br></br>candy house</span>
                  <p>Shop all</p>
                </div>
              </a>
            </div>
            <div className='second-img-2'>
              <a href='#'>
                <img src='./images/skull.jpg' alt='img' className='image-4'></img>
                <div className='text-overlay'>
                  <span>Throw a monster <br></br>mash</span>
                  <p>Shop party</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='third'>
          <div className='third-img'>
          <a href='#'>
                <img src='./images/angel.jpg' alt='img' className='image-5'></img>
                <div className='text-overlay'>
                  <span>Cutest costumes on <br></br>the block</span>
                  <p>Shop now</p>
                </div>
              </a>
          </div>
        </div>
      </div>
    </section>

    <section className='slider-4'>
      <div className='container'>
        <div className='text'>
          <div className='text-1'>
            <h5>Fear not—there’s more</h5>
            <p>View all</p>
          </div>
          <div className='text-2'>
            <p>Something wicked this way comes.</p>
          </div>
          <div className='slider4'>
          <Carousel
              responsive={slider4}
              infinite={true}
          >
            <div class='item'>
              <div className='image'>
                <img src='./images/hlw-1.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/hlw-2.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/hlw-3.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/hlw-4.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/hlw-5.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/hlw-6.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/hlw-7.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/hlw-8.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/hlw-9.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/hlw-10.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/hlw-11.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
            <div class='item'>
              <div className='image'>
                <img src='./images/hlw-12.webp'></img>
              </div>
              <div className='text'>
                <h5>$19.98</h5>
                <p>No Boundaries Women's<br/>Buckle Moto Boots</p>
                <button>+ Add</button>
              </div>
            </div>
          </Carousel>
          </div>
        </div>
      </div>
    </section>
    <hr></hr>

    <section className='video'>
      <div className='text'>
        <h2>Featured in videos</h2>
        <p>See what creators are sharing</p>
      </div>
      <div className='slider'>
        <Carousel
          responsive={vidslider}
          swipeable={true}
          draggable={true} autoPlay={true} infinite={true}
          autoPlaySpeed={2000} autoplayHoverPause={true}
          mouseDrag={true} autoWidth={true}
        >
          <div className='item'>
            <div className='video'>
              <HoverVideoPlayer
                videoSrc="./videos/vid-1.mp4"
                loadingOverlay={
                  <div className="loading-overlay">
                    <div className="loading-spinner" />
                  </div>
                }
              />
            </div>
            <div className='video-text'>
              <h4>$191.51</h4>
              <p>Linon Galena 2-Drawer Nightstand, Navy,<br/>Size: 25.25 inch Large X 18 inch D</p>
            </div>
          </div>
          <div className='item'>
            <div className='video'>
              <HoverVideoPlayer
                  videoSrc="./videos/vid-2.mp4"
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
            </div>
            <div className='video-text'>
              <h4>$191.51</h4>
              <p>Linon Galena 2-Drawer Nightstand, Navy,<br/>Size: 25.25 inch Large X 18 inch D</p>
            </div>
          </div>
          <div className='item'>
            <div className='video'>
            <HoverVideoPlayer
                videoSrc="./videos/vid-3.mp4"
                loadingOverlay={
                  <div className="loading-overlay">
                    <div className="loading-spinner" />
                  </div>
                }
              />
            </div>
            <div className='video-text'>
              <h4>$191.51</h4>
              <p>Linon Galena 2-Drawer Nightstand, Navy,<br/>Size: 25.25 inch Large X 18 inch D</p>
            </div>
          </div>
          <div className='item'>
            <div className='video'>
            <HoverVideoPlayer
                videoSrc="./videos/vid-4.mp4"
                loadingOverlay={
                  <div className="loading-overlay">
                    <div className="loading-spinner" />
                  </div>
                }
              />
            </div>
            <div className='video-text'>
              <h4>$191.51</h4>
              <p>Linon Galena 2-Drawer Nightstand, Navy,<br/>Size: 25.25 inch Large X 18 inch D</p>
            </div>
          </div>
          <div className='item'>
            <div className='video'>
            <HoverVideoPlayer
                videoSrc="./videos/vid-5.mp4"
                loadingOverlay={
                  <div className="loading-overlay">
                    <div className="loading-spinner" />
                  </div>
                }
              />
            </div>
            <div className='video-text'>
              <h4>$191.51</h4>
              <p>Linon Galena 2-Drawer Nightstand, Navy,<br/>Size: 25.25 inch Large X 18 inch D</p>
            </div>
          </div>
          <div className='item'>
            <div className='video'>
            <HoverVideoPlayer
                videoSrc="./videos/vid-6.mp4"
                loadingOverlay={
                  <div className="loading-overlay">
                    <div className="loading-spinner" />
                  </div>
                }
              />
            </div>
            <div className='video-text'>
              <h4>$191.51</h4>
              <p>Linon Galena 2-Drawer Nightstand, Navy,<br/>Size: 25.25 inch Large X 18 inch D</p>
            </div>
          </div>
          <div className='item'>
            <div className='video'>
            <HoverVideoPlayer
                videoSrc="./videos/vid-7.mp4"
                loadingOverlay={
                  <div className="loading-overlay">
                    <div className="loading-spinner" />
                  </div>
                }
              />
            </div>
            <div className='video-text'>
              <h4>$191.51</h4>
              <p>Linon Galena 2-Drawer Nightstand, Navy,<br/>Size: 25.25 inch Large X 18 inch D</p>
            </div>
          </div>
          <div className='item'>
            <div className='video'>
            <HoverVideoPlayer
                videoSrc="./videos/vid-8.mp4"
                loadingOverlay={
                  <div className="loading-overlay">
                    <div className="loading-spinner" />
                  </div>
                }
              />
            </div>
            <div className='video-text'>
              <h4>$191.51</h4>
              <p>Linon Galena 2-Drawer Nightstand, Navy,<br/>Size: 25.25 inch Large X 18 inch D</p>
            </div>
          </div>
        </Carousel>
      </div>
    </section>

    <footer className='login-footer-home'>
            <div className='login-footer1-home'>
                <ul>
                    <li><a href='#'>Give feedback</a></li>
                    <li><a href='#'>CA Privacy Rights</a></li>
                    <li><a href='#'><PiToggleRight color='blue'/> Your Privacy Choices</a></li>
                    <li><a href='#'>Notice at Collection</a></li>
                    <li><a href='#'>Request My Personal Information</a></li>
                    <li><a href='#'>Delete Account</a></li>
                    <li><a href='#'>California Supply Chains Act</a></li>
                </ul>
            </div>

            <div className='login-footer2-home'>
                <p>© 2024 Walmart. All Rights Reserved.</p>
            </div>
        </footer>
    </>
  )
}

export default Home
