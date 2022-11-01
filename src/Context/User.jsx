import { createContext, useState } from "react";
import { useEffect } from "react";
import {AuthchangeListiner, createUser} from '.././Firebase/firebase';
import { useNavigate } from "react-router-dom";
export const  UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null,
})




export const UserProvider = ({children})=>{
let [currentUser, setCurrentUser] = useState(null);
const Navigate = useNavigate();

useEffect(()=>{
   
    const unmount = AuthchangeListiner((user)=>{
        console.log(user)
    
        

        if(user){
            createUser(user);
        };

        Navigate('/');
        setCurrentUser(user)


    });
    return unmount;

},[])

let value = {currentUser, setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

