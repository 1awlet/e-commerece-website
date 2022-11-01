import { ItemContext } from '../../Context/Item-context-component';
import { useContext } from 'react';

const PcItem = ({Product})=>{
    let {id, ImageURL, Title, Price}= Product;

    let {addItemstoCart} = useContext(ItemContext)


    let addItem=()=>{
       addItemstoCart(Product);
       console.log(Product);

    }
    return(
        <div key={id} className='Pc-items'>
                  
        <img src={ImageURL}></img>


   <button onClick={addItem}  className='btn-cart' >Add to cart</button>
     
      <div   className='des'>
          <h3>{Title}</h3>
        <h3>{Price}</h3>
       
         </div>



        </div>

    )
}

export default PcItem;