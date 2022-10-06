import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Catalog from './page/Catalog/Catalog';
import Page from './page/Page';
import Popup from './page/popup/Popup';
import '../src/firebase.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/Catalog' element={<Catalog/>}/> 
      <Route path='/Catalog/:id' element={<Page/>}/>
      <Route path='/popup' element={<Popup/>}/>
    </Routes>
       
    </BrowserRouter>
 
  </React.StrictMode>
);


