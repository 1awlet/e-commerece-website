import './Catagory.scss';
import Pc from './Assets/Pc.jpeg';
import Watch from './Assets/Watch.jpeg';
import Vr from './Assets/Vr.jpeg';
import Robot from './Assets/Robot.jpeg';
import Consoles from './Assets/Consoles.jpeg';
import Headphone from './Assets/Headphones.jpeg';
import Catagories from './../Catagories/Catagories-component';


let Catagory = ()=>{

    let Data = [
        
        {   id:1,
            Name: 'Pc',
            Imageurl: Pc,
        },
    
         
        {   id:2,
            Name: 'Watch',
            Imageurl: Watch,
        },
         
        {   id:3,
            Name: 'Vr',
            Imageurl: Vr,
        },
         
        {   id:4,
            Name: 'Robot',
            Imageurl: Robot,
        },
         
        {   id:5,
            Name: 'Headphone',
            Imageurl: Headphone,
        },

        {   id:6,
            Name: 'Consoles',

            Imageurl: Consoles,
        },

    ];


    return(

        <div    className='catagory-contianer'>  
       
        

       {
        Data.map((item)=>(
            
          <Catagories key={item.id} item={item}></Catagories>
        ))
       }
            
        </div>

    )
}

export default Catagory;