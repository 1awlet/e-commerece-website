import logo from './logo.svg';
// import {Routes, Route} from 'react-router-dom';
import './App.css';
import { ReactDOM } from 'react';
import Home from './Components/Home/Home-Component';
import {Routes, Route} from 'react-router-dom';
import Nav from './Routes/Nav';
import SignIN from './Components/Sign-in/Sign-in.component';
import SignUp from './Components/Sign-up/Sign-up-component';
import Catagory from './Components/Catagory/Catagory-Component';


function App() {
  return (
    <div className="App">

    <Routes>
      <Route path='/' element={<Nav />}>
     
     
      <Route index element={<Home />}></Route>
      <Route  path='Sign-in' element={<SignIN />}></Route>
      <Route  path='Sign-up' element={<SignUp />}></Route>
      <Route  path='catagories' element={<Catagory />}></Route>

      </Route>
      
    </Routes>

    
  
    </div>
  );
}

export default App;
