import { createContext, useState } from "react";
import { Context } from "react";



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

    
    const addItemstoCart = ()=>{

    }
    let value= {isOpen, setOpen, CartItems, setCartItem, Count};
    return (
        <ItemContext.Provider value={value}>{children}</ItemContext.Provider>
    )
}