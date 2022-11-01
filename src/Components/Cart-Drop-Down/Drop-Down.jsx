
import './drop.scss';

import {ItemContext} from '../../Context/Item-context-component';
import { useContext } from 'react';
import CartItem from '../Card-Item/Card-Item-component';
import { UserContext } from '../../Context/User';
// import CartItem from '../Card-drop/Drop-items-component';
const DropDown = ()=>{

    let { CartItems} = useContext(ItemContext);
    let {currentUser} = useContext(UserContext)

    return(
        <div    className={ `dropDown-Container ${currentUser ? 'yes' :'no'}`}>
        
        <div    className='Cart-item'>
          
        
          

          {
            CartItems.map((item)=>{
             
             return( <CartItem  key={item.id} item={item}></CartItem>)
            })
          
          } 
             
            
          
        
        </div>

        </div>
    )
}

export default DropDown;