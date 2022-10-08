import { createContext, useState } from "react";
import Data from '../Data.json';


export const ProductConext = createContext({

    items: Data
})


export const ProductProvider = ({children}) =>{
    let [items, setItems] = useState(Data);
    
    console.log(items)

    let value= {items,setItems};
    return(
        <ProductConext.Provider value={value}> {children}</ProductConext.Provider>
    )
}

