import { createContext, useState } from "react";


export const  UserContext = createContext({
    isOpen:false,
    setIsOpen:()=>{}
})




export const UserProvider = ({children})=>{
let [isOpen, setIsOpen] = useState(false);

let value = {isOpen, setIsOpen};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

