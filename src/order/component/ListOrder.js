import watch from './product/watch2.jpg'
import hp from './product/hp laptop.png'
import iphoneii from './product/iphone 13.jpg'
import ring from './product/ring.jpg'
import tele from './product/tele.webp'
import watche from './product/watch.jpg'
import iphonei from './product/iphone 11.jpg'
import jean from './product/jeans2.png'
import shirt from './product/shirt.webp'
import Text from './Text'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
const ListOrder = () =>{


    return(
        <div className='movetop'>
            <div className='sliderorder'>
        <Swiper  
       freeMode= {true}
       grabCursor={true}
       slidesPreview={4}
       spaceBetween={-1100}>
            <SwiperSlide>
            <div className=""> 
             <img className='imalist' src={watch} alt='order' width={140} height={200}/>
                <p className='shifts'>Watch</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=""> 
             <img className='imalist' src={tele} alt='order' width={140} height={200}/>
                <p className='shifts'>Television</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=""> 
             <img className='imalist speima' src={hp} alt='order' width={140} height={200}/>
                <p className='shifts'>Laptop</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=""> 
             <img className='imalist' src={iphoneii} alt='order' width={140} height={200}/>
                <p className='shifts'>Iphone 13</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=""> 
             <img className='imalist' src={watche} alt='order' width={140} height={200}/>
                <p className='shifts'>Watch</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=""> 
             <img className='imalist' src={shirt} alt='order' width={140} height={200}/>
                <p className='shifts'>Shirt</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=""> 
             <img className='imalist' src={ring} alt='order' width={140} height={200}/>
                <p className='shifts'>Ring</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=""> 
             <img className='imalist' src={iphonei} alt='order' width={140} height={200}/>
                <p className='shifts'>Iphone 11</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className=""> 
             <img className='imalist' src={jean} alt='order' width={140} height={200}/>
                <p className='shifts'>Jean</p>
            </div>
            </SwiperSlide>
     </Swiper>
     </div>
     <Text />
            </div>
    )
}
export default ListOrder