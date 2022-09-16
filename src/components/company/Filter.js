import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../css/filter.css';
import { FilterInput, FilterDropdown, AddButton, SearchButton } from '../all';

export function Filter(props){
  const { getUser, addRequest, setError, checked, setChecked } = props;
  const { t } = useTranslation();
  const [CpnyID, setCpnyID] = useState('');

  // const onFocus = async () => {
  //   if(!inventoryStatus?.length){
  //     setLoading('table.status');
  //     let response = await dispatch(getConstants(login, 'inInventory_TranStatus', setInventoryStatus));
  //     setError(response?.error);
  //     setLoading(false);
  //   }
  // }

  return (
    <div className='filter_container2'>
        <div className='filter_container3'>
        <div className='filter_container'>
          <FilterInput
            label='table.company'
            value={CpnyID}
            setValue={setCpnyID} 
            onPressEnter={() => getUser(CpnyID)}
            icon='AiOutlineUser' />
          <SearchButton 
          onClick={() => getUser(CpnyID)} 
          />
        </div>
        
      </div>
      <AddButton onClick={addRequest} />
    </div>
  )
}