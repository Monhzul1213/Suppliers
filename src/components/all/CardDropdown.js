import React, { useState } from "react";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import { useTranslation } from 'react-i18next';

import { Error } from './Error';

const Option = (props) => {
  // let txntype =[];
  // Option.map(item => {
  //   //label, value
  //   txntype.push(item?.value)
  // })
  // console.log(txntype)
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

export function CardDropdown(props){
  const { label, value, setValue, handleEnter,onFocus,  disabled, id } = props;
  const { t } = useTranslation();

  const onChange = e => {
    console.log('----------', e, '------');
    setValue({value: e});
  };

  const Options = [
    { label: "Багцлалт", value: 'INAS' },
      { label: "Тохируулга", value: 'INAJ' },
      {label: "Зарлага", value: 'INII' },
      {label: "Тооллого", value: 'INPI' },
      { label: "Орлого", value: 'INRC' },
      { label: "Шилжүүлэг", value: 'INTR' },
      { label: "Буцаалтын орлого", value: 'PSCM' },
      { label: "Буцаалтын Зарлага", value: 'PSIN' }
    ];

  return(
    <div className="card_input_container">
      <p className='card_input_label'>{t(label)}</p>
      <ReactSelect 
      placeholder={t('txntype_enter')}
      // className="card_input"
      options={Options}
       isMulti
       closeMenuOnSelect={false}
       hideSelectedOptions={false}
       value={value?.value}
       components={{
        Option
      }}
      onChange={onChange}
      // value={[value]}
      // filterOption={(input, option) => option.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      // showSearch
      // onFocus={onFocus}
      // disabled={disabled}
      // onSelect={e => setValue(e.target.value)}
      />
      {value?.error ? <Error label={label} error={value?.error} fromForm={true} /> : null}
    </div>
   
    );
}

