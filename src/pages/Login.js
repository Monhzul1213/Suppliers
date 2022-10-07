import React, { Suspense } from 'react';

import '../css/login1.css';
import LoginNew from '../components/login/LoginNew';
import LoginImages from '../components/login/LoginImages';
import { Loading } from './Loading';

export function Login(){
  return (
    <Suspense fallback={<Loading />}>
      <LoginNew/>
      {/* <div className='login'>
      <div className='login_container'>
        <LoginImages />
        <div className='login_form'>
        <LoginForm />
        </div>
      </div> 
      </div>*/}
    </Suspense>
  )
}