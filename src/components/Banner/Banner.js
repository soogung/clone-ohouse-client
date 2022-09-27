import './Banner.scss'
import {Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import {Link} from "react-router-dom";

SwiperCore.use([ Pagination, Autoplay ])

function Banner(props){
    return(
        <div className='banner_tit'>
            <div className='banner-swiper'>
                <Swiper
                    className='banner'
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{clickable: true}}
                    autoplay={{delay: 3000}}
                    watchOverflow={true}
                >
                    {props.banner.map(b => (
                        <SwiperSlide>
                            <Link to ="">
                                <img className='banner--image' src={b.img} alt="banner"/>

                            </Link>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
                
            </div>
            
        </div>
    )
}

export default Banner;