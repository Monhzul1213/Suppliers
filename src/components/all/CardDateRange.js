import React from 'react';
import { useTranslation } from 'react-i18next';
import { DatePicker } from 'antd';

import { Error } from './Error';

export function CardDateRange(props){
  const { label, value, setValue, disabled } = props;
  const { RangePicker } = DatePicker;
  const { t } = useTranslation();
  const onChange = e => setValue({ value: e, error: null });

  return (
    <div className='card_input_container'>
      <p className='card_input_label'>{t(label)}</p>
      <RangePicker className='card_input'
        value={value?.value}
        disabled={disabled}
        format='yyyy.MM.DD'
        placeholder=''
        onChange={onChange} />
      {value?.error ? <Error label={label} error={value?.error} fromForm={true} /> : null}
    </div>
  )
}