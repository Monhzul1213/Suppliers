import React from 'react';
import { useTranslation } from 'react-i18next';
import { Input as AntInput } from 'antd';
import { Error } from './Error';

export function CardPassword(props){
  const { label, value, setValue, isPassword, handleEnter, setError } = props;
  const { t } = useTranslation();

  const onChange = e => {
    setValue({value: e?.target?.value}); 
       setError && setError('');
  }

  const inputProps = { onKeyDown: handleEnter, value: value?.value, onChange };

  return (
    <div className='card_input_container'>
      <p className='card_input_label'>{t(label)}</p>
      {isPassword
        ? <AntInput.Password {...inputProps} className='card_input'/>
        : <div className='login_input_back'><AntInput {...inputProps} /></div>
      }
      {value?.error ? <Error label={label} error={value?.error} fromForm={true} /> : null}
    </div>
  )
}