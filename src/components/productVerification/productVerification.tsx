import { Avatar, Button, Card, Image, Input, Table, Tabs } from 'antd';
import React, { useState } from 'react'
import "./productVerification.scss"

import viewIcon from "../../assets/icons/view.svg"
import searchIcon from "../../assets/icons/search.svg"
import type { ColumnsType } from 'antd/es/table';

const { TabPane } = Tabs;

const ProductVerification = () => {
  const data = [
    {
      key: '1',
      productId: 'PO12345',
      orderImage: 'https://img.freepik.com/premium-vector/good-things-take-time-t-shirt-design_136545-507.jpg',
      orderName: 'Premium quality T-shirt for men',
      applingDate: '2023-09-08',
      verificationCharges: '$22',
      status: 'pending',
    },
    {
      key: '2',
      productId: 'PO12345',
      orderImage: 'https://img.freepik.com/premium-vector/good-things-take-time-t-shirt-design_136545-507.jpg',
      orderName: 'Premium quality T-shirt for men',
      applingDate: '2023-09-08',
      verificationCharges: '$22',
      status: 'approved',
    },
    {
      key: '3',
      productId: 'PO12345',
      orderImage: 'https://img.freepik.com/premium-vector/good-things-take-time-t-shirt-design_136545-507.jpg',
      orderName: 'Premium quality T-shirt for men',
      applingDate: '2023-09-08',
      verificationCharges: '$22',
      status: 'rejected',
    }
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
      title: 'Product Id',
      dataIndex: 'productId',
      key: 'productId',
    },
    {
      title: 'Order Name',
      dataIndex: 'orderName',
      key: 'orderName',
    },
    {
      title: 'Applying Date',
      dataIndex: 'applingDate',
      key: 'applingDate',
    },
    {
      title: 'Verification Charges',
      dataIndex: 'verificationCharges',
      key: 'verificationCharges',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text: any, record: any) => (
        <div>
          {(() => {
                switch (record.status) {
                  case 'pending':
                    return <div className="badge-common badge-processing">Pending</div>;
                  case 'rejected':
                    return <div className="badge-common badge-placed">Rejected</div>;
                  case 'approved':
                    return <div className="badge-common badge-delivered">approved</div>;
                  default:
                    return <div className="badge-common">Unknown Status</div>;
                }
              })()}
        </div>
      ),
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text: any, record: any) => (
        <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
            <Button className='resend-ver-btn'>resend</Button>
          {
            record.status === 'approved' || "rejected"  && <Button className='ver-action-buttons'><img src={viewIcon} width={17} alt="" /></Button>
          }
        </div>
      ),
    },
  ];

  const [searchText, setSearchText] = useState('');

  const handleSearch = (e:any) => {
    setSearchText(e.target.value);
  };

  // const filteredData = data.filter((item) =>
  //   item.orderName.toLowerCase().includes(searchText.toLowerCase())
  // );
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchText.toLowerCase())
    )
  );


  //wallet 

 

  return (
    <>
    <div className='wrapper-product-verification-main bx-bg--white border-repel card-shadow'>
      <div className="head-ver">
        <h2>Product Verification</h2>
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


    </>
  )
}

export default ProductVerification