import './Catagories.scss';

import Button from './../Buttons/Button-component';
import { Link, Route, Routes } from "react-router-dom";
import PC from '../Items-component/pc';
const Catagories = ({item})=>{
    let {Name, Imageurl} = item;

    return (
        <div   className='catagories-con'> 
         <div className='background-image'
        style={{
          backgroundImage: `url(${Imageurl})`
        }} />
        <div    className='Catagory-body-container'>
      <h1>{Name}</h1>
        {/* <Button style={'View'}content={'View'}></Button> */}
        <Link to={Name}  className='View'>   <button  > View</button></Link>

        </div>
   

    
    </div>
    )
}



export default Catagories;