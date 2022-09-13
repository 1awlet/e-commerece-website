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


let Data= [
    {   id:1,
        Text:'Slider 1',
        Quote:'Lorem Lorem',
        ImageUrl: ss
    },
    {   id:2,
        Text:'Slider 2',
        Quote:'Lorem Lorem',
        ImageUrl: Carki
    },
    {   id:3,
        Text:'Slider 3',
        Quote:'Lorem Lorem',
        ImageUrl: Art
    },
    {   id:4,
        Text:'Slider 4',
        Quote:'Lorem Lorem',
        ImageUrl: hkk
    },
    {   id:5,
        Text:'Slider 5',
        Quote:'Lorem Lorem',
        ImageUrl: Mole
    },
    {   id:6,
        Text:'Slider 5',
        Quote:'Lorem Lorem',
        ImageUrl: olo
    },
    {   id:7,
        Text:'Slider 5',
        Quote:'Lorem Lorem',
        ImageUrl:Iman
    }
]
const Sliders = ()=>{
    return(
        <> 
    <div   className='Container'>
        <h1> Our Amazing Team (example)</h1>


    <Swiper    className='Testimonal'
    
    modules={[Navigation, Pagination]}
    spaceBetween={50}
    slidesPerView={4}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    
        
    >
        
        
        {Data.map(({Text, Quote, ImageUrl})=>(
         
            <SwiperSlide    className='single-Testi'>
            <div   className='Image-Content'>
                <span className='Overlay'></span>
                <div    className='Image-Card'>
                <img src={ImageUrl} />

              
                </div>

            </div>
          <div  className='Card-Content'>
          
            <h3>{Text}</h3>
            <p>{Quote}</p>

            <button >View more</button>

              </div>

        </SwiperSlide>

        ))}

      



    </Swiper>






    </div>


    </>
    )
}

export default Sliders;