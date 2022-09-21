import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {collection, doc, getDocs} from 'firebase/firestore'
import {db} from '../../firebase'
import {formatNumber} from '../../helpers/formatNumber'
import { useTable, usePagination, useRowSelect, useSortBy, useGlobalFilter, useFilters } from 'react-table';

import '../../css/table.css';
import { Pagination, Sort, ColumnFilter } from '../all';

export function Table(props){
  // const[user, setUser]= useState([])
  const { data, setVisible, selected, setSelected, setData , CpnyID, setCpnyID} = props;
  const { t, i18n } = useTranslation();
  const [columns, setColumns] = useState([]);



 
  useEffect(() => {
    setColumns([
      { Header:<div style={{  textAlign:'center', }}>{t('table.company')}</div>, accessor: 'CpnyID' },
      { Header:<div style={{ textAlign:'center',}}>{t('user_email')}</div>, accessor: 'WebUserID', },
      { Header:<div style={{ textAlign:'center',}}>{t('user_password')}</div>, accessor: 'WebPassword',  },
      { Header:<div style={{ textAlign:'center',}}>{t('login.email')}</div>, accessor: 'Email', },
      { Header:<div style={{ textAlign:'center', }}>{t('table.phone')}</div>, accessor: 'Phone', Cell: props => <div style={{textAlign: 'center',  paddingRight: 15}}>{(props.value)}</div> },
       { Header:<div style={{ textAlign:'center', width: '200px'}}>{t('table.address')}</div>, accessor: 'Address', },
       { Header: <div style={{textAlign: 'center', }}>{t('table.vendorCount')}</div>, accessor: 'VendorCount' ,Cell: props => <div style={{textAlign: 'center'}}>{formatNumber(props.value)}</div> }, 
      { Header: <div style={{textAlign: 'center', }}>{t('table.License')}</div>, accessor: 'LicenseAmt', 
      Cell: props => <div style={{textAlign: 'right',  paddingRight: 15}}>{(props.value)}</div> }, 
      { Header: <div style={{  textAlign:'center',} }>{t('table.webservice')}</div>, accessor: 'WebServiceURL' , Cell: props => <div style={{textAlign: 'left',  paddingRight: 15}}>{(props.value)}</div> },
      { Header:<div style={{textAlign: 'center' }}>{t('txntype')}</div> , accessor: 'TxnType',   },
      { Header: <div style={{textAlign:'center'}}>{t('AppServer_IP')}</div> , accessor: 'AppServerIP' ,  Cell: props => <div style={{ paddingRight: 15}}>{(props.value)}</div> },
      { Header: <div style={{ textAlign:'center',} }>{t('AppServer_Port')}</div>, accessor: 'AppServerLoginPort', Cell: props => <div style={{textAlign: 'center'}}>{(props.value)}</div>   },     
      { Header: <div style={{ textAlign:'center', } }>{t('AppServer_UserID')}</div> ,accessor: 'AppServerLoginUserID', Cell: props => <div style={{textAlign: 'center'}}>{(props.value)}</div> },  
      { Header:<div style={{textAlign: 'center' }}>{t('AppServer_UserPass')}</div> , accessor: 'AppServerLoginUserPass',   },
      
      { Header:<div style={{textAlign: 'center' }}>{t('table.created_date')}</div> , accessor: 'CreatedDate',   }
      
     
      
      // { Header: <div style={{textAlign: 'center', width: '80px'}}>{t('table.usevendorCount')}</div>, accessor: 'UseVendorCount',
      // Cell: props => <div style={{textAlign: 'right'}}>{formatNumber(props.value)}</div> },
     
    ])
    
    return () => {};
  }, [i18n?.language])

// {data.filter((val)=>{
//     // if(CpnyID == ""){
//     //   return val
//     // } else if (val.CpnyID.toLowerCase().includes(CpnyID.toLowerCase())){
//     //   return val;
//     // }
//   })
// }

  useEffect(() => {
    if(!selected){
      toggleAllRowsSelected(false);
    }
    return () => {};
  }, [selected]);

  const onRowClick = row => {
    toggleAllRowsSelected(false);
    row?.toggleRowSelected();
    setVisible(true);
    setSelected(row?.original);
    // setData()
  }
  const handleClick = row =>{
    toggleAllRowsSelected(false);
    row?.toggleRowSelected();
  }

  const tableInstance = useTable( { columns, data, 
  initialState: { pageIndex: 0, pageSize: 100, sortBy: [{ id: 'CreatedDate', desc: true }] }}, useSortBy, usePagination, useRowSelect, //useFilters //useGlobalFilter 
  );
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page, toggleAllRowsSelected , 
   state, setGlobalFilter
  } = tableInstance;
  const {globalFilter}=state


  // var filter =  data.filter(function(creature) {
  //   return creature.CpnyID == "Ultimate"//data.includes(CpnyID.toLowerCase());
    
  // })
  // console.log(filter);
  return (
    <>
 
    <div className='page_back'>
      <div className='table_container'>
        <table className='table_back' {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th className='table_header_text' {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <div className='table_header_cell'>
                      <span style={{flex: 1}}>{column.render('Header')}</span>
                      {/* <div>{column.canFilter ? column.render('Filter'):null}</div> */}
                      <Sort data={column} />
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className='table_body_back' {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              let style = row?.original?.HexColor ? {backgroundColor: row?.original?.HexColor} : {};
              return (
                <>
                <tr className={row?.isSelected ? 'table_row_selected' : 'table_row'} {...row.getRowProps()} style={style} onClick={() => handleClick(row)} onDoubleClick={() => onRowClick(row)}>
                  {row.cells.map(cell => {
                    return <td className='table_cell_text' {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>  
                  {/* {row?.original?.Address ? <tr className={row?.isSelected ? 'table_row_selected' : ''} colSpan={13} style={style}  onClick={() => handleClick(row)} onDoubleClick={() => onRowClick(row)}><td colSpan={13}>
                  <p className='table_descr'>{t('table.address')}:   {row?.original?.Address}</p>
                 </td></tr> : null}
                  {row?.original?.Phone ? <tr className={row?.isSelected ? 'table_row_selected' : ''} colSpan={11} style={style}  onClick={() => handleClick(row)} onDoubleClick={() => onRowClick(row)} ><td colSpan={11}>
                  <p className='table_descr'>{('Холбоо барих:')}   {row?.original?.Email}, {row?.original?.Phone}   </p>
               </td></tr> : null} */}
              
               </>
              )
            })}
            
          </tbody>
        </table>
      </div>
      <Pagination tableInstance={tableInstance} hasTotal={true} total={data?.length}  />
    </div>
    </>
  )
}