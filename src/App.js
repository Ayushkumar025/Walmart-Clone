
import './App.css';
import Header from './component/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';
import SingleProduct from './component/singleproducts/SingleProduct';
import React, { useState } from "react";
import { auth, provider } from "./FirebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
import Login from './component/Login/Login';
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Header/><Home /></>} />
        <Route path='/contact-us' element={<><Header/><Contact/></>} />
        <Route path='/product-details' element={<><Header/><SingleProduct/></>} />
        <Route path='/login' element={<><Login/></>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
