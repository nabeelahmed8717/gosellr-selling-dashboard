import React from 'react'
import "./recentOrders.scss"
import { Avatar, Image, Table } from 'antd';

const RecentOrders = () => {

    const dataSource = [
        {
          key: '1',
          productImage:"https://pbs.twimg.com/media/DkGTksAW4AAaqvt.jpg",
          productName: 'Jordans shoes',
          buyer: "John Doe",
          orderNo: 'EN6784',
          total: '$200',
          status: 'pending',
        },
        {
          key: '2',
          productImage:"https://img.freepik.com/premium-vector/good-things-take-time-t-shirt-design_136545-507.jpg",
          productName: 'Premium quality T-shirt for men',
          buyer: "Willam Marks",
          orderNo: 'DG6348',
          total: '$17',
          status: 'orderPlaced',
        },
        {
          key: '3',
          productImage:"https://nypost.com/wp-content/uploads/sites/2/2023/02/amazon-beauty.jpg?quality=75&strip=all",
          productName: 'Cosmetic, Makeup and Skin Care Products',
          buyer: "Sara Andrew",
          orderNo: 'DG6348',
          total: '$300',
          status: 'delivered',
        },
        {
            key: '4',
            productImage:"https://img.freepik.com/premium-vector/good-things-take-time-t-shirt-design_136545-507.jpg",
            productName: 'Premium quality T-shirt for men',
            buyer: "Willam Marks",
            orderNo: 'DG6348',
            total: '$17',
            status: 'orderPlaced',
          }
      ];
      
      const columns = [
        {
          title: 'Product',
          dataIndex: '',
          key: '',
          render: (_:any, record:any) => (
            <div>
                <Avatar shape="square" size={30} icon={<Image src={record.productImage} alt="" />} />
            </div>
          ),
        },
        {
          title: 'Product Name',
          dataIndex: 'productName',
          key: 'productName',
          render: (_:any, record:any) => (
            <div className='single-line-nowwrap' style={{width:"100px"}}>{record.productName}</div>
          )
        },
        {
          title: 'Buyer',
          dataIndex: 'buyer',
          key: 'buyer',
           render: (_:any, record:any) => (
            <div className='single-line-nowwrap' style={{width:"73px"}}>{record.buyer}</div>
          )
        },
        {
          title: 'Order No',
          dataIndex: 'orderNo',
          key: 'orderNo',
           render: (_:any, record:any) => (
            <div>{record.orderNo}</div>
          )
        },
        {
          title: 'Total',
          dataIndex: 'total',
          key: 'total',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render: (_:any, record:any) => (
            <div>
              {(() => {
                switch (record.status) {
                  case 'pending':
                    return <div className="badge-common badge-processing">Pending</div>;
                  case 'orderPlaced':
                    return <div className="badge-common badge-placed">Order Placed</div>;
                  case 'delivered':
                    return <div className="badge-common badge-delivered">Delivered</div>;
                  default:
                    return <div className="badge-common">Unknown Status</div>;
                }
              })()}
            </div>
          ),
         
          
          
          
          
          
          
        },
      ];

  return (
    <div className='recent-orders-wrapper bx-bg--white border-repel card-shadow'>
        <h4>Recent Orders</h4>
        <div className="wrapper-table">
        <Table dataSource={dataSource} columns={columns} pagination={{pageSize:3}} 
        // scroll={{ x: 'auto', y: 200 }}
        scroll={{ x:"max-content" }} 
        />
        </div>
    </div>
  )
}

export default RecentOrders;