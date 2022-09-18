import { Outlet,Link} from "react-router-dom";
// import {  } from "react-router-dom";
import { Fragment } from "react";
import Button from '../Components/Buttons/Button-component';
import {ReactComponent as Logo} from '../Assets/hexagon.svg';
import './Nav.scss';
import  ShopLogo from './Assets/Shop.png';
import ShopCart from '../Components/Cart-Shop/Cart-Component';
import Maa from '../Assets/M.jpg';
import {ReactComponent as Menu} from './Assets/Menu.svg';

let Nav = ()=>{

    return(
     <Fragment>
    
         <div className="Nav-contianer">

           <div className="logo">
           
          <Link to={'/'}>
            
        <Logo className='logo-img'> </Logo>
          
           </Link>
           <Link to={'/'}> <h1 >My Shop</h1>
             </Link>  
        
           
           </div> 

         <div   className="Nav-links">


            <div className="content-link">
            <Link to={'catagories'}>  <h1>Catagories</h1></Link>
            <Link to={'catagories'}><h1> About </h1></Link>
            {/* <Img src={ShopLogo}></Img>  */}
            {/* <img src={ShopLogo} className='Logo'></img> */}
           

          
        
            </div>
            <div className="Shop">
            <ShopCart ></ShopCart>
            <Menu className='burger'></Menu>
            </div>
            <div  className="btns">

           
           <Link to={'Sign-in'}><Button style={'blue'} content={'Sign in'}></Button>
           </Link> 
          <Link to={'Sign-up'}>  <Button style={'black'} content={'Sign up'}></Button>

          </Link> 
          </div>

            </div>


       
        
        </div>
        
      


        <Outlet></Outlet>

        </Fragment>
    )
}

export default Nav;