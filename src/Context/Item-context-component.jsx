import { useEffect } from "react";
import { createContext, useState } from "react";
import { Context } from "react";

const setItem = (CartItem,Product)=>{
    
    const check = CartItem.find(item => item.id === Product.id);

    if(check){
        // console.log('item exists');
        return CartItem.map((item)=>{
     
            if(item.id === Product.id){
             return {...item, quantity: item.quantity+1}
            }else{
                return item;
            }

            
        })

    }

    return [...CartItem, {...Product, quantity:1}]
}





export const ItemContext = createContext({

    isOpen: false,
    setOpen: ()=>{},
    CartItems: [],
    addItemstoCart: ()=> {},
    Count:0

});


export const ItemProvider = ({children})=>{
    const [isOpen, setOpen] = useState(false);
    const[CartItems, setCartItem]= useState([]);
    const [Count, setCount] = useState(0);

    
    // useEffect(()=>{

    //   const count=  CartItems.reduce((total, currentItem)=>{
        
    //     return total + currentItem.quantity;
    //     })

    // },[CartItems]);

    useEffect(()=>{

        const CardCount= CartItems.reduce((total, currentItem)=>{
            return total + currentItem.quantity;

        },0)

   setCount(CardCount);

    }, [CartItems])
    
    const addItemstoCart = (Product)=>{
        
      setCartItem(setItem(CartItems, Product));
     
      }
    let value= {isOpen, setOpen, CartItems, addItemstoCart, Count};
    return (
        <ItemContext.Provider value={value}>{children}</ItemContext.Provider>
    )
}