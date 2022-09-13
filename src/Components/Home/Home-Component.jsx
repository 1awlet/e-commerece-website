
import { UserContext } from "../../Context/User";
import { useContext } from "react";
import Show from "../Main-Section/main-compoent";
import Sliders from '../Main-Section/Sec2-component';
const Home = ()=>{
    let {isOpen, setIsOpen} = useContext(UserContext);


    let clickHandlare = ()=>{

      setIsOpen(!isOpen)


    }   
    console.log(isOpen)

    return(
        <div>
            {/* <button onClick={clickHandlare} >Change Status</button> */}

            <Show></Show>

            <Sliders></Sliders>
        </div>
    )
}


export default Home;