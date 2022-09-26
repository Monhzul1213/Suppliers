import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../css/filter.css';
import { FilterInput, FilterDropdown, AddButton, SearchButton } from '../all';

export function Filter(props){
  const { getUser,setData, addRequest, setError, checked, setChecked, data1, setData1 } = props;
  const { t } = useTranslation();

  return (
    <div className='filter_container2'>
        {/* <div className='filter_container3'>
        <div className='filter_container'>
          <FilterInput
            label='company-search'
            value={data1}
            setValue={setData1} 
            // onChange={(e)=>{ setCpnyID(e.target.value)}}
            // onPressEnter={() => getUser(CpnyID)}
            icon='AiOutlineUser' />
          
        </div> */}
        
      {/* </div> */}
      <AddButton onClick={addRequest} />
    </div>
  )
}