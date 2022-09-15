import { Outlet,Link} from "react-router-dom";
// import {  } from "react-router-dom";
import { Fragment } from "react";
import Button from '../Components/Buttons/Button-component';
import {ReactComponent as Logo} from '../Assets/hexagon.svg';
import './Nav.scss';
import Maa from '../Assets/M.jpg';

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
                <Link to={'catagories'}>Catagories</Link>
            <Link to={'catagories'}>About</Link>
            </div>
           <Link to={'Sign-in'}><Button style={'blue'} content={'Sign in'}></Button>
           </Link> 
          <Link to={'Sign-up'}>  <Button style={'black'} content={'Sign up'}></Button>

          </Link> 

            </div>

        
        
        </div>


        <Outlet></Outlet>

        </Fragment>
    )
}

export default Nav;