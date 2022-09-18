import ShopLogo from './Assets/Shop.png';
import './Cart.scss';

const ShopCart = ()=>{


    return(
        <div   className='Cart-Container'>
            <div    className='Cart-logo'>
         <img src={ShopLogo} className='Logos'></img>
        <span   className='Count'>0</span>
        </div>
       
      
        </div>
    )
}

export default ShopCart;