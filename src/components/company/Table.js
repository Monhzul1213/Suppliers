
import React, { useRef, useState, useEffect } from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table as AntTable } from 'antd';
import { useTranslation } from 'react-i18next';
import '../../css/table.css'

import Highlighter from 'react-highlight-words';

export const Table = (props) => {
  const {data, setVisible, selected, setSelected, setData , CpnyID, setCpnyID} = props;
  const [searchText, setSearchText] = useState('');
  const [filteredInfo, setFilteredInfo] = useState({});
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const { t } = useTranslation();

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search `}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
         
            size="small"
            style={{
              width: 90,
            }}
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
            clearFilters && 
            handleReset(clearFilters)
            setSearchText(selectedKeys[0]);
            setSearchedColumn(dataIndex);
            }}
          >
            Reset
          </Button>
          {/* <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
            setSearchText(selectedKeys[0]);
            setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button> */}
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),

    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: t('print.company'), 
      // accessor: 'CpnyID' ,
      dataIndex: 'CpnyID',
      key: 'CpnyID',
      ...getColumnSearchProps('CpnyID'),
      
    },
    {
      title: t('table.company'), 
      // accessor: 'CpnyID' ,
      dataIndex: 'CpnyName',
      key: 'CpnyName',
      ...getColumnSearchProps('CpnyName'),
      
    },
    {
      title: t('user_email'),
      dataIndex: 'WebUserID',
      key: 'WebUserID',
      // width: '20%',
      ...getColumnSearchProps('WebUserID'),
      // accessor: 'WebUserID'
    },
    {
      title: t('user_password'),
      dataIndex: 'WebPassword',
      key: 'WebPassword',
      ...getColumnSearchProps('WebPassword'),
      // sorter: (a, b) => a.WebPassword.length - b.WebPassword.length,
      // sortDirections: ['descend', 'ascend'],
      // accessor: 'WebPassword'
    },
    // {
    //   title: t('login.email'),
    //   dataIndex: 'Email',
    //   key: 'Email',
    //   ...getColumnSearchProps('Email'),
    //   // sorter: (a, b) => a.Email.length - b.Email.length,
    //   // sortDirections: ['descend', 'ascend'],
    //   // accessor: 'WebPassword'
      
    // },

    {
      title: t('table.phone'),
      dataIndex: 'Phone',
      key: 'Phone',
      align: 'center',
      ...getColumnSearchProps('Phone'),
      // sorter: (a, b) => a.Phone.length - b.Phone  .length,
      // sortDirections: ['descend', 'ascend'],
      // accessor: 'WebPassword'
    },   
    {
      title: t('table.address'),
      dataIndex: 'Address',
      key: 'Address',
      ...getColumnSearchProps('Address'),
      // sorter: (a, b) => a.Address.length - b.Address.length,
      // sortDirections: ['descend', 'ascend'],
      // accessor: 'WebPassword'
    },    
    {
      title: t('table.webservice'),
      dataIndex: 'WebServiceURL',
      key: 'WebServiceURL',
      ...getColumnSearchProps('WebServiceURL'),
      // sorter: (a, b) => a.WebServiceURL.length - b.WebServiceURL.length,
      // sortDirections: ['descend', 'ascend'],
      // accessor: 'WebPassword'
    },
    {
      title: t('table.vendorCount'),
      dataIndex: 'VendorCount',
      key: 'VendorCount',
      align: 'center',
      ...getColumnSearchProps('VendorCount'),
      // sorter: (a, b) => a.VendorCount.length - b.VendorCount.length,
      // sortDirections: ['descend', 'ascend'],
      // accessor: 'WebPassword'
    }, 
    {
      title: t('Үүсгэсэн огноо'),
      dataIndex: 'CreatedDate',
      key: 'CreatedDate',
      align: 'center',
      ...getColumnSearchProps('CreatedDate'),
      // sorter: (a, b) => new Date(a.CreatedDate) - new Date( b.CreatedDate),
      // sortDirections: ['descend', 'ascend'],
      accessor: 'CreatedDate',
      // width: 0,
      defaultSortOrder: "descend"
    },
  ];
 

  return <AntTable columns={columns} dataSource={data}
  onChange={handleChange}
 
  onRow={(record, rowIndex) => {
    return {
      onDoubleClick: event => {
        setVisible(true)
        setSelected(record);
        console.log(record)
      }, 
    };
  }}  />;
};
