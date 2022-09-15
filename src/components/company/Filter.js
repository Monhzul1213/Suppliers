import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Checkbox } from 'antd';

import '../../css/filter.css';
import { getConstants, setInventoryStatus } from '../../services';
import { FilterInput, FilterDropdown, AddButton, SearchButton } from '../all';

export function Filter(props){
  const { getData, addRequest, setError, checked, setChecked } = props;
  const { t } = useTranslation();
  const [barcode, setBarcode] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const inventoryStatus = useSelector(state => state.constants.inventory_status);
  const login = useSelector(state => state.login);

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
        
      <AddButton onClick={addRequest} />
    </div>
  )
}