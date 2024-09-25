import React, { useState } from "react";
import { TbBrandWalmart } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { GoChevronDown } from "react-icons/go";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { PiHouseLight } from "react-icons/pi";
import { HiChevronRight } from "react-icons/hi2";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { IoGiftOutline } from "react-icons/io5";
import { LuNewspaper } from "react-icons/lu";
import { FaChevronUp } from "react-icons/fa6";
import './header.css'
import { Link } from "react-router-dom";

function Header() {
    const [showCart,setshowcart]=useState(false);
    const [showorder,setshoworder]=useState(false);
    const [showaccount,setshowaccount]=useState(false);
    const [showdpt,setshowdpt]=useState(false);
  return (
    <React.Fragment>
      <header className="mainheader">
        <nav className="top-header">
          <TbBrandWalmart color="#ffc220" size={36} />
          <div className="select-bar" onClick={()=>setshowcart(!showCart)}>
            <img src='./images/hand-cash.webp' alt="cash-hand"></img>
            <div>
                <h5>How do you want your items?</h5>
                <p>Sacramento,95829</p>
            </div>
            {showCart ? <FaChevronUp />:<FaChevronDown />}
          </div>
        <div className="search-bar">
            <input type="search" name="search" placeholder="Search everything at walmart online and in store"></input>
            <IoSearchCircle color="004f9a" size={40} />
        </div>
        <div className="items" onClick={()=>{setshowcart(false)
        setshoworder(!showorder)}}>
          <div className="logo">
            <CiHeart color="white" size={20} />
          </div>
          <div className="sub-items">
            <span>Reorder</span>
            <h5>My Items</h5>
          </div>
        </div>
        <div className="account" onClick={()=>{
          setshowcart(false)
          setshowaccount(!showaccount)}}>
          <div className="logo">
            <FaRegUser color="white" />
          </div>
          <div className="sub-acc">
            <span>Sign In</span>
            <h5>Account</h5>
          </div>
        </div>
        <div className="cart-item">
          <div className="logo">
            <FiShoppingCart color="white" size={25} />
          </div>
          <span style={{color:"white"}}>$0.00</span>
        </div>
        </nav>
        <nav className="bottom-header">
          <div className="dpt" onClick={()=>setshowdpt(!showdpt)}>
            <RxDashboard />
            <h5>Departments</h5>
            <GoChevronDown />
          </div>
          <div className="service">
            <RxDashboard />
            <h5>Services</h5>
            <GoChevronDown />
          </div>
          <div>|</div>
          <div className="sub">
            <ul>
              <li className="sub-bottom-header"><a href="#">Savings</a></li>
              <li className="sub-bottom-header"><a href="#">Grocery & Essentials</a></li>
              <li className="sub-bottom-header"><a href="#">New & Trending</a></li>
              <li className="sub-bottom-header"><a href="#">Halloween</a></li>
              <li className="sub-bottom-header"><a href="#">Beauty Glow Up</a></li>
              <li className="sub-bottom-header"><a href="#">Electronics</a></li>
              <li className="sub-bottom-header"><a href="#">Home</a></li>
              <li className="sub-bottom-header"><a href="#">Fashion</a></li>
              <li className="sub-bottom-header"><a href="#">Toy Shop</a></li>
              <li className="sub-bottom-header"><a href="#">Registry</a></li>
            </ul>
          </div>
        </nav>
      </header>
      {showCart && <div className="outer" onClick={()=>setshowcart(false)}><div className="cart">
        <div className="upper">
          <div className="sub-upper">
            <img src="./images/truck.png" width={50} height={50}></img>
            <h5 style={{color:"white"}}>Shipping</h5>
          </div>
          <div className="sub-upper">
            <img src="./images/car.png" width={50} height={50}></img>
            <h5 style={{color:"white"}}>Pickup</h5>
          </div>
          <div className="sub-upper">
            <img src="./images/bag.png" width={50} height={50}></img>
            <h5 style={{color:"white"}}>Delivery</h5>
          </div>
        </div>
        <div className="mid">
          <p><b> <LiaMapMarkerSolid /> Add an address for Shipping and Delivery</b></p>
          <span style={{marginLeft:"15px"}}>Sacramento, CA 95829</span>
          <div className="add-address">
            <h5 style={{marginLeft:"15px"}}>Add address</h5>
          </div>
        </div>
        <div className="lower">
          <div className="sub-lower">
            <p><b><PiHouseLight /> Sacramento Supercenter</b></p>
            <span style={{marginLeft:"15px"}}>8915 GERBER ROAD, Sacramento, CA </span>
          </div>
          <div className="logo">
            <HiChevronRight />
          </div>
        </div>
      </div></div>}
      {showorder && <div className="order">
        <div className="re-order">
          <ul>
            <li><FaArrowRightToBracket /><a href="#"> Reorder</a></li>
            <li><CiHeart /><a href="#"> Lists</a></li>
            <li><IoGiftOutline /><a href="#"> Registry</a></li>
          </ul>
        </div>
      </div>}
      {showaccount && <div className="account-status">
        <div className="upper">
          <div className="box">
            <a href="#"><Link to='/Login'><b>Sign in or create account</b></Link></a>
          </div>
          <hr></hr>
        </div>
        <div className="lower">
          <ul>
            <li><LuNewspaper /><a href="#">Purchase History</a></li>
            <li><img src="./images/walmart.svg" width={20} height={20}></img><a href="#">Walmart+</a></li>
          </ul>
        </div>
      </div>}
      {showdpt && <div className="departments">
        <ul>
          <li className="list"><a href="#"><b>All departments</b></a></li>
          <li className="list"><a href="#">Savings</a></li>
          <li className="list"><a href="#">Grocery</a></li>
          <li className="list"><a href="#">New and Trending</a></li>
          <li className="list"><a href="#">Halloween</a></li>
          <li className="list"><a href="#">Tailgating</a></li>
          <li className="list"><a href="#">Home, Garden & Tools</a></li>
          <li className="list"><a href="#">Electronics & Video Games</a></li>
          <li className="list"><a href="#">Clothing, Shoes, & Accessories</a></li>
          <li className="list"><a href="#">Toys, Kids & Baby</a></li>
          <li className="list"><a href="#">Beauty</a></li>
          <li className="list"><a href="#">Personal Care</a></li>
          <li className="list"><a href="#">Pharmacy, Health & Wellness</a></li>
          <li className="list"><a href="#">Auto & Tires</a></li>
          <li className="list"><a href="#">Household Essentials</a></li>
          <li className="list"><a href="#">Pets</a></li>
          <li className="list"><a href="#">Sports & Outdoors</a></li>
          <li className="list"><a href="#">Office & School Supplies</a></li>
          <li className="list"><a href="#">Seasonal Decor & Party Supplies</a></li>
          <li className="list"><a href="#">Movies, Music & Books</a></li>
          <li className="list"><a href="#">Gift Cards</a></li>
          <li className="list"><a href="#">Shop With Purpose</a></li>
        </ul>
      </div>}
    </React.Fragment>
  );
}
export default Header;
