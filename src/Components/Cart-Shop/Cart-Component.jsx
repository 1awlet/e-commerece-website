import ShopLogo from './Assets/Shop.png';
import './Cart.scss';
import { useContext } from 'react';
import { ItemContext } from '../../Context/Item-context-component';

const ShopCart = ()=>{

    let {isOpen, setOpen, Count} = useContext(ItemContext);


    let showItem = ()=>{
        setOpen(!isOpen);
        console.log(isOpen)
       
    }
    return(
        <div   className='Cart-Container' onClick={showItem}>
            <div    className='Cart-logo'>
         <img src={ShopLogo} className='Logos'></img>
        <span   className='Count'>{Count}</span>
        </div>
       
      
        </div>
    )
}

export default ShopCart;