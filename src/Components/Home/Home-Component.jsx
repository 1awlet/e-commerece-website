
import { UserContext } from "../../Context/User";
import { useContext } from "react";
const Home = ()=>{
    let {isOpen, setIsOpen} = useContext(UserContext);


    let clickHandlare = ()=>{

      setIsOpen(!isOpen)


    }   
    console.log(isOpen)

    return(
        <div>
            <button onClick={clickHandlare} >Change Status</button>
        </div>
    )
}


export default Home;