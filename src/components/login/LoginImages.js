import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import office  from '../../assets/office.jpg';

export default function LoginImages(){
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) { return '<span class="' + className + '"></span>'; }
  };

  return (
    <div>
      <div className='login_image_container'>
        <img src={office} alt='image_login' className='login_image' />
      </div>
      {/* <div className='login_slides'>
         <Swiper autoplay={{delay: 4000}} pagination={pagination} modules={[Pagination]}>
          <SwiperSlide>
            <img src={office} alt='image_login' className='login_image' />
          </SwiperSlide>
          <SwiperSlide> 
            <img src={office} alt='image_login' className='login_image' />
          </SwiperSlide>
        </        
      </div> */}
    </div>
  )
} 