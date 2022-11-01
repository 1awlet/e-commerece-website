
import './pc.scss';
import {ProductConext} from '../../Context/Product.context';
import {useContext} from 'react';

import Data from '../../Data.json';
import PcItem from '../Pc-Items/Pc-Items-component';


let PC = ()=>
{
     let {items} = useContext(ProductConext);
     



  

     return(

   <div    className='pcdiv'>
       
       {
          items.map((product)=>{
            
     //    let {id, Title, ImageURL, Price} = product; 
           
        
    return(    
     <PcItem  key={product.id} Product={product}>
     </PcItem>
               );
})
       }
    </div>
     );
}

export default PC;
