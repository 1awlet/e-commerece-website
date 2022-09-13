import logo from './logo.svg';
// import {Routes, Route} from 'react-router-dom';
import './App.css';
import { ReactDOM } from 'react';
import Home from './Components/Home/Home-Component';
import {Routes, Route} from 'react-router-dom';
import Nav from './Routes/Nav';
function App() {
  return (
    <div className="App">

    <Routes>
      <Route path='/' element={<Nav />}>
     
     
      <Route index element={<Home />}></Route>
      </Route>
      
    </Routes>

    
  
    </div>
  );
}

export default App;
