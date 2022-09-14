import './Sec.scss';
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Art from './Asset/Art.jpg';
import Carki from './Asset/Carki.jpg';
import hkk from './Asset/hkk.jpg';
import Iman from './Asset/Iman.jpg';
import Mole from './Asset/mole.jpg';
import olo from './Asset/olo.jpg';
import ss from './Asset/ss.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {useState, useEffect, useCallback} from 'react';

let Data= [
    {   id:1,
        Text:'Slider 1',
        Quote:'Karmen Barić connects online brands to their target audiences for the perfect marketing experience. At the University of California, Davis, Karmen learned the importance of applying classic marketing techniques to modern brand strategies from experts in the field, including her Communications professor',
        ImageUrl: ss
    },
    {   id:2,
        Text:'Slider 2',
        Quote:'Melanie Sato opens the line of communication between clients, customers, and businesses to get projects done. With over 20 years in both public and private sectors, Melanie has experience in management consultation, team building, professional development, strategic implementation, and company collaboration',
        ImageUrl: Carki
    },
    {   id:3,
        Text:'Slider 3',
        Quote:'Manuel Iglesias draws from his life story when writing about the experiences of migrant workers. His first series of poems, My Fathers Hands, appeared in The New Yorker and describes how his family crossed the Texas border to give Manuel and his brothers a better life',
        ImageUrl: Art
    },
    {   id:4,
        Text:'Slider 4',
        Quote:'Debra Carroll knows that successful students become successful adults. This is her 15th year at Edison Elementary School and her 10th year teaching fourth grade. So far, fourth grade is her favorite grade to teach',
        ImageUrl: hkk
    },
    {   id:5,
        Text:'Slider 5',
        Quote:'Mole  specialize in logo design, branding, web design and offer design services to businesses of all sizes around the world, ultimately improving their bottom line by crafting creative solutions to their business problems. Shoot me a quick email to see how I can help you!',
        ImageUrl: Mole
    },
    {   id:6,
        Text:'Slider 5',
        Quote:'I know that no single approach is the right one for every individual, and so I have been trained in a range of modalities including Relational Gestalt Therapy, Gestalt Play Therapy, Somatic Experiencing and NARM somatic approaches to the treatment of trauma',
        ImageUrl: olo
    },
    {   id:7,
        Text:'Slider 5',
        Quote:'Another wizard from the marketing world, Ann Hardley, has her awesome manner of telling things about herself without bragging too much. She has got the credentials to build a lengthy list but as she keeps it short and smart to keep the audience interested in her.',
        ImageUrl:Iman
    }
]

    

const Sliders = ()=>{

    let  [windSize, setWinSize] = useState(window.innerWidth);


    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setWinSize(window.innerWidth);

        })

    },[window.innerWidth])

    let previewHandlar = ()=>{
        let value=4;
        if(windSize < 1281 && windSize > 900){
            value = 3;
        }else if(windSize < 900 && windSize > 600){
            value=2;
        }else if(windSize < 600 ){
            value=1
        }

        return value
    }

    return(
        <> 
    <div   className='Container'>
        <h1> Our Amazing Team (example)</h1>


    <Swiper    className='Testimonal'
    
    modules={[Navigation, Pagination]}
    spaceBetween={50}
    slidesPerView={previewHandlar()}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    
        
    >
        
        
        {Data.map(({id,Text, Quote, ImageUrl})=>(
         
            <SwiperSlide  key={id}  className='single-Testi'>
            <div   className='Image-Content'>
                <span className='Overlay'></span>
                <div    className='Image-Card'>
                <img src={ImageUrl} />

              
                </div>

            </div>
          <div  className='Card-Content'>
          
            <h3>{Text}</h3>
            <p>{Quote}</p>

           <div className='btn-sec'>
             <button >View more</button>
             </div>
              </div>

        </SwiperSlide>

        ))}

      



    </Swiper>






    </div>


    </>
    )
}

export default Sliders;