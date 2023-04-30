import { createContext, useEffect, useState } from 'react';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './global.scss';
import Home from './routes/Home';
// import Splash from './routes/Splash'
import Order from './routes/Order';

export default function App() {
  const [product, setProduct] = useState(null);
  const userContext = createContext();
  
  useEffect(() => {
    fetch('http://localhost:8000/product')
      .then(responseObject => {
        return responseObject.json();
      })
      .then(data => {
        setProduct(data);
      });
  }, []);
  
  return (
    <userContext.Provider value={product}>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home product={product}/>}/>
            <Route path='/order' element={<Order product={product}/>}/>
          </Routes>
        </div>
      </Router>
    </userContext.Provider>
  )
}
