
import { useContext } from 'react';

import './Card.scss';



let CartItem = ({item})=>{
    let {id, ImageURL, Title, Price, quantity}= item;

    return(

          <div key={id}    className='item-con'>
          <img src={ImageURL}  >
          </img>
          
          <div  className='des' >
             <h1>{item.Title}</h1>
             <span>{quantity}</span>
             </div>
          </div>
   
    )
}


export default CartItem;