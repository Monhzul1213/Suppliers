import React from 'react';
import { useTranslation } from 'react-i18next';

import { empty } from '../../assets';

export function Empty({ id }){
  const { t } = useTranslation();

  return (
    <div className='empty_back' id={id}>
      <img src={empty} alt='empty' className='empty_img' />
      <p className='empty_text'>{t('empty')}</p>
    </div>
  )
}