
import './App.css';
import Header from './component/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Header/><Home /></>} />
        <Route path='/contact-us' element={<><Header/><Contact/></>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
