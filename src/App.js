import logo from './logo.svg';
// import {Routes, Route} from 'react-router-dom';
import './App.css';
import { ReactDOM } from 'react';
import Home from './Components/Home/Home-Component';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">

    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>

      hi
  
    </div>
  );
}

export default App;
