
import './pc.scss';
import {ProductConext} from '../../Context/Product.context';
import {useContext} from 'react';

let PC = ()=>
{
     let {items} = useContext(ProductConext);
   return(

   <div    className='pcdiv'>
       
       {
          items.map(({id, Title, ImageURL, Price})=>(
             
               <div key={id} className='Pc-items'>
             
               <img src={ImageURL}></img>

         <button   className='btn-cart'>Add to cart</button>
            
             <div   className='des'>
                 <h3>{Title}</h3>
               <h3>{Price}</h3>
              
                </div>

      

               </div>
          ))
       }
    </div>
     )
}

export default PC;
