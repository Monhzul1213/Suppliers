import React, { useState } from "react";
import { colourOptions } from "./Data";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import { useTranslation } from 'react-i18next';

const Option = (props) => {
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
  // const onChange = e => setValue({ value: e?.target?.value, error: null });

  const onChange = (e) => {
    console.log( value);
    setValue({value: e?.target?.value});
  };
  return(
    <div className="card_input_container">
       <p className='card_input_label'>{t(label)}</p>
       <ReactSelect 
      placeholder='Гүйлгээний төрөл сонгоно уу?'
      // className="card_input"
      options={colourOptions}
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
    </div>
   
    );
}

