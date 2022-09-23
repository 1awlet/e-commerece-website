import Vids from './Asset/Background.webm';
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
          <video className="Vids" src={Vids} autoPlay muted loop  playsInline={true} disablePictureInPicture={true}  />
        </div>
    )
}

export default Show;