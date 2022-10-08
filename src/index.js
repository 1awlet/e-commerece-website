import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Context/User';
import { ItemProvider } from './Context/Item-context-component';
import { ProductProvider } from './Context/Product.context';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 

  <React.StrictMode>
    <BrowserRouter> 
    <UserProvider>
   
   <ItemProvider>
    <ProductProvider> 
     <App />
     </ProductProvider>
     </ItemProvider>
      </UserProvider>  
     
   
    </BrowserRouter>  
  
  </React.StrictMode>


 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

