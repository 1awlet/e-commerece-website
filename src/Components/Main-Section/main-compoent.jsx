import Vids from './Asset/video.mp4';
import './Main.scss';
import Buttons from '../Buttons/Button-component';
import {Link} from 'react-router-dom';
const Show = ()=>{

    return(
        <div className='Main-Container'>

      <div  className='Content'>

   <Link to={'catagories'}>
   <Buttons style={'main'} content={'Explore'}></Buttons>
    </Link>   
     <p> Explore the latest technologies</p>
      </div>
          <video className="Vids" src={Vids} autoPlay muted   loop />
        </div>
    )
}

export default Show;