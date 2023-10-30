import { Avatar, Button, Image, Input, Table } from 'antd';
import React, { useState } from 'react'
import "../../orders.scss"
import "../pendingOrders.scss"

import viewIcon from "../../../../assets/icons/view.svg"
import searchIcon from "../../../../assets/icons/search.svg"
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';

const PendingMain = () => {
  const navigate = useNavigate()
  const data = [
    {
      key: '1',
      orderNumber: 'PO12345',
      orderImage: 'https://img.freepik.com/premium-vector/good-things-take-time-t-shirt-design_136545-507.jpg',
      orderName: 'Premium quality T-shirt for men',
      customerName: 'John Doe',
      customerContactNo:"000 000000 0",
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
      customerContactNo:"000 000000 0",
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
      customerName: 'Alice Johnson',
      customerContactNo:"000 000000 0",
      location: '456 Elm Avenue, Cityville, CA',
      orderDate: '2023-09-10',
      orderPrice: '$15',
      status: 'Pending',
    },
    {
      key: '4',
      orderNumber: 'PO13579',
      orderImage: 'https://www.gangstagroup.com/sub/gangstagroup.com/shop/product/urban-classics-sunglasses-march-camo-150225.jpeg',
      orderName: 'Designer Sunglasses',
      customerName: 'Bob Wilson',
      customerContactNo:"000 000000 0",
      location: '789 Oak Lane, Townsville, TX',
      orderDate: '2023-09-11',
      orderPrice: '$35',
      status: 'Pending',
    },
    {
      key: '5',
      orderNumber: 'PO98765',
      orderImage: 'https://shop.alqasimjewellers.com/wp-content/uploads/2019/03/Engagement-silver-necklace-set-pure-Asian-style.jpg',
      orderName: 'Elegant Silver Necklace',
      customerName: 'Eva Martinez',
      customerContactNo:"000 000000 0",
      location: '101 Pine Street, Villagetown, NY',
      orderDate: '2023-09-12',
      orderPrice: '$50',
      status: 'Pending',
    },
    {
      key: '6',
      orderNumber: 'PO56789',
      orderImage: 'https://pyxis.nymag.com/v1/imgs/3be/54b/7a34aadc99a7c4290c204c434185cd7c58-3-24-Watch.1x.rsquare.w1400.jpg',
      orderName: 'Fitness Tracker Watch',
      customerName: 'David Lee',
      customerContactNo:"000 000000 0",
      location: '222 Cedar Road, Hamletville, FL',
      orderDate: '2023-09-13',
      orderPrice: '$30',
      status: 'Pending',
    },
    {
      key: '7',
      orderNumber: 'PO11223',
      orderImage: 'https://static-01.daraz.pk/p/2c221f6a6d05c3ac6ab6d6e733d31d03.jpg',
      orderName: 'Smartphone Stand',
      customerName: 'Grace Turner',
      customerContactNo:"000 000000 0",
      location: '333 Maple Street, Suburbia, CA',
      orderDate: '2023-09-14',
      orderPrice: '$10',
      status: 'Pending',
    },
    {
      key: '8',
      orderNumber: 'PO44556',
      orderImage: '',
      orderName: 'Wireless Earbuds',
      customerName: 'Mike Johnson',
      customerContactNo:"000 000000 0",
      location: '444 Birch Lane, Riverside, TX',
      orderDate: '2023-09-15',
      orderPrice: '$40',
      status: 'Pending',
    },
    {
      key: '9',
      orderNumber: 'PO78901',
      orderImage: '',
      orderName: 'Laptop Backpack',
      customerName: 'Sophia Brown',
      customerContactNo:"000 000000 0",
      location: '555 Oak Street, City Heights, NY',
      orderDate: '2023-09-16',
      orderPrice: '$25',
      status: 'Pending',
    },
    {
      key: '10',
      orderNumber: 'PO23456',
      orderImage: '',
      orderName: 'Stainless Steel Water Bottle',
      customerName: 'Oliver White',
      customerContactNo:"000 000000 0",
      location: '666 Elm Road, Townsville, TX',
      orderDate: '2023-09-17',
      orderPrice: '$12',
      status: 'Pending',
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
      title: 'Customer Name',
      dataIndex: 'customerName',
      key: 'customerName',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Order Date',
      dataIndex: 'orderDate',
      key: 'orderDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text: any, record: any) => (
        <div className="badge-common badge-processing">Pending</div>
      ),
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text: any, record: any) => (
        <div>
          <Button className='process-order-btn' onClick={() => navigate(`/process-order`, { state: { orderDetails: record } })}>Process order</Button>
        </div>
      ),
    },
  ];

  const [searchText, setSearchText] = useState('');

  const handleSearch = (e:any) => {
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
        <h2>Pending Orders</h2>
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

export default PendingMain