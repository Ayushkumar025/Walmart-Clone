import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
    <main>
      <section className='main'>
        <div className='first'>
          <div className='first-img'>
            <img src='./images/goat.jpg' width={'auto'} height={'auto'} alt='goat' className='image-1'></img>
            <div className='text-overlay'>The Top Toy List is here</div>
          </div>
          <div className='second-img'>
            <img src='./images/small-kid.jpg' width={'auto'} height={'auto'} alt='small-kid'></img>
          </div>
          <div className='third-img'>
            <img src='./images/dino.jpg' width={'auto'} height={'auto'} alt='dinosaur'></img>
          </div>
        </div>
        <div className='second'>

        </div>
        <div className='third'>

        </div>
      </section>
    </main>
    </>
  )
}

export default Home
