import React, { Suspense } from 'react';

import '../css/login.css';
import LoginForm from '../components/login/LoginForm';
import LoginImages from '../components/login/LoginImages';
import { Loading } from './Loading';

export function Login(){
  return (
    <Suspense fallback={<Loading />}>
      <div className='login_container'>
        <LoginImages />
        <div className='login_form'>
          <LoginForm />
        </div>
      </div>
    </Suspense>
  )
}