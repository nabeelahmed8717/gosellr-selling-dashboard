import { Avatar, Button, Dropdown, Image, Input, MenuProps, Space, Table } from 'antd';
import React, { useState } from 'react'
import "../../orders.scss"
import "../pendingOrders.scss"

import viewIcon from "../../../../assets/icons/view.svg"
import searchIcon from "../../../../assets/icons/search.svg"
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';


import threeDots from "../../../../assets/icons/menu-dots.svg"

const UnderProcess = () => {
  const navigate = useNavigate()
  const data = [
    {
      key: '1',
      orderNumber: 'PO12345',
      orderImage: 'https://img.freepik.com/premium-vector/good-things-take-time-t-shirt-design_136545-507.jpg',
      orderName: 'Premium quality T-shirt for men',
      customerName: 'John Doe',
      customerContactNo: "000 000000 0",
      riderName:"Willam marks",
      riderRequestStatus:"Request Pending",
      location: 'dummy location ehb technologies...',
      orderDate: '2023-09-08',
      orderPrice: '$22',
      status: 'Pending',
    },
    {
      key: '2',
      orderNumber: 'PO67890',
      orderImage: 'https://theleatherposh.com/wp-content/uploads/2021/08/Stylish-Streetwear-Leather-Skirt-Pink-Jacket-Women-e1628256326633.jpg',
      orderName: 'Stylish Women\'s Jacket',
      customerName: 'Jane Smith',
      customerContactNo: "000 000000 0",
      riderName:"Jhon Doe",
      riderRequestStatus:"Request Accepted",
      location: '123 Main Street, Anytown, USA',
      orderDate: '2023-09-09',
      orderPrice: '$45',
      status: 'Pending',
    },
    {
      key: '3',
      orderNumber: 'PO24680',
      orderImage: 'https://www.nelsonwere.com/wp-content/uploads/2021/05/2020_11_17_______NelsonW-94.jpg',
      orderName: 'Classic Leather Wallet',
      customerName: 'Roger gran',
      customerContactNo: "000 000000 0",
      riderName:"Roger gran",
      riderRequestStatus:"Request Decline",
      location: '456 Elm Avenue, Cityville, CA',
      orderDate: '2023-09-10',
      orderPrice: '$15',
      status: 'Pending',
    },
  ];


  const items: MenuProps['items'] = [
    {
      label: 'View',
      key: '0',
    },
    {
      label: 'Cancel Order',
      key: '1',
    },
  ];

  const columns: ColumnsType<any> = [
    {
      title: 'Order Image',
      dataIndex: 'orderImage',
      key: 'orderImage',
      render: (_: any, record: any) => (
        <div>
          <Avatar shape="square" size={30} icon={<Image src={record.orderImage} alt="" />} />
        </div>
      ),
    },
    {
      title: 'Order Number',
      dataIndex: 'orderNumber',
      key: 'orderNumber',
    },
    {
      title: 'Order Name',
      dataIndex: 'orderName',
      key: 'orderName',
    },
    {
      title: 'Assigned Rider',
      dataIndex: 'riderName',
      key: 'riderName',
    },
    {
      title: 'Rider Request Status',
      dataIndex: 'riderRequestStatus',
      key: 'riderRequestStatus',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text: any, record: any) => (
        <div className="badge-common badge-in-progress">In Process</div>
      ),
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text: any, record: any) => (
        <div>
          <Dropdown menu={{ items }} trigger={['click']}>
              <Space>
               <img src={threeDots} width={20} height={20} alt="" />
              </Space>
          </Dropdown>
        </div>
      ),
    },
  ];

  const [searchText, setSearchText] = useState('');

  const handleSearch = (e: any) => {
    setSearchText(e.target.value);
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <div className='wrapper-orders-main bx-bg--white border-repel card-shadow pending-wrapper'>
      <div className="head-orders">
        <h2>Under Processing Orders</h2>
        <Input className='search-wrapper' onChange={handleSearch} placeholder="Search..." suffix={<img width={16} height={16} src={searchIcon} alt="" />} />
      </div>
      <div className='wrapper-orders-table'>
        <Table
          dataSource={filteredData}
          columns={columns}
          pagination={{ pageSize: 7 }}
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  )
}

export default UnderProcess