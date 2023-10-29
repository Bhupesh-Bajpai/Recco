import React ,{useEffect} from 'react';
import cartReducer from './Utils/cartSlice'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';


import Header from './Components/Header';
import Order from './Components/Order';
import appStore from './Utils/appStore';
import { setProducts } from './Utils/cartSlice';
import Header2 from './Components/Header2';
import OrderBox from './Components/OrderBox';
function App() {


  useEffect(() => {
    // Simulate a backend call to fetch data
    fetch('http://localhost:3000/mockData.json') // Adjust the path as needed
      .then((response) => response.json())
      .then((jsonData) => {
        appStore.dispatch(setProducts(jsonData));
      })
      
  }, [appStore]);


 

  const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
  
  
  return (
    <Provider store={appStore}>
    <div className="w-screen h-screen">
          <Router>
            <Header />
            <Header2 />
            <Routes>
                
                <Route path="/" element={<OrderBox />} />
             
            </Routes>
        </Router>
    </div>
    </Provider>
  );
}


export default App


