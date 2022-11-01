import { Outlet,Link} from "react-router-dom";
// import {  } from "react-router-dom";
import { Fragment, useContext } from "react";
import Button from '../Components/Buttons/Button-component';
import {ReactComponent as Logo} from '../Assets/hexagon.svg';
import './Nav.scss';
import  ShopLogo from './Assets/Shop.png';
import ShopCart from '../Components/Cart-Shop/Cart-Component';
import Maa from '../Assets/M.jpg';
import {ReactComponent as Menu} from './Assets/Menu.svg';
import {ReactComponent as Xmark} from './Assets/Xmark.svg';
import {useRef, useState} from 'react';
import { ItemContext } from "../Context/Item-context-component";
import {UserContext} from '../Context/User';
import DropDown from '../Components/Cart-Drop-Down/Drop-Down';
import {signoutbtn} from '../Firebase/firebase'
let Nav = ()=>{
    const [isBurgerOn, setBurgerOn] = useState(true);
    const ContentRef = useRef();
    const ShopRef = useRef();
let hideNav = ()=>{
    ContentRef.current.classList.toggle('toggle'); 
    ShopRef.current.classList.toggle('toggle');
    setBurgerOn(!isBurgerOn);
}
let ShowBurger = ()=>{
  setBurgerOn(!isBurgerOn);
  ContentRef.current.classList.toggle('toggle'); 
  ShopRef.current.classList.toggle('toggle');
}

      let {currentUser} = useContext(UserContext);
      console.log(currentUser)
  
let {isOpen} = useContext(ItemContext);
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

         <div   className="Nav-links ">
            <div  ref={ContentRef} className="content-link  toggle"  >
            <Link to={'catagories'} onClick={hideNav}>  Catagories</Link>
            <Link to={'About'} onClick={hideNav}>About </Link>
            {/* <Img src={ShopLogo}></Img>  */}
            {/* <img src={ShopLogo} className='Logo'></img> */}
            </div>
            <div className="Shop toggle" >
            <ShopCart ></ShopCart>

            { isBurgerOn ? (

      <Menu className='burger'  onClick={hideNav}></Menu>

            ):
            (
              <Xmark className='burger Xmark'  onClick={ShowBurger}></Xmark>

            )

            }
            </div>
            <div ref={ShopRef}   className="btns toggle">

            {
              currentUser? (
                <Button style={'Signout'} content={'Sign out'} onClick={signoutbtn}></Button>

              )
              : 
              (
               <div className="btns ">
                 <Link to={'Sign-in'}><Button style={'blue'} content={'Sign in'} onClick={hideNav}></Button>
                </Link> 
               <Link to={'Sign-up'}>  <Button style={'black'} content={'Sign up'} onClick={hideNav}></Button>
               </Link> 
               </div>
              )
            }
           
  
          </div>

            </div>
           {
            isOpen &&<DropDown></DropDown>
           } 
  
        </div>
        
        <Outlet></Outlet>

        </Fragment>
    )
}

export default Nav;