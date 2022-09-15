import React, { Suspense } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import {  useAuth } from './firebase'
import { Loading, Login,  Company} from './pages';

export function App(){
  const user = useAuth();
  SwiperCore.use([Autoplay]);
  
  if(!user) return (<Login />);

  return (
      <Suspense fallback={<Loading />}>
        <Company />
      </Suspense>
  )
}