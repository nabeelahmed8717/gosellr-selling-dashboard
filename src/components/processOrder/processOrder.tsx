import { Col, Image, Row, Tabs, TabsProps } from 'antd';
import React from 'react'
import { useLocation } from 'react-router-dom';
import "./processOrder.scss"
import RidersGrid from '../../shared/ridersGrid/ridersGrid';
import { ridersNearByData } from '../../mock/ridersNearBy';
import StoreRiders from './storeRiders/storeRiders';
import { storeRidersData } from '../../mock/storeRiders';

const ProcessOrder = () => {
    const location = useLocation();
    const { orderDetails } = location.state;

    const onChange = (key: string) => {
        console.log(key);
      };
      
      const items: TabsProps['items'] = [
        {
          key: '1',
          label: 'Riders near by',
          children: <RidersGrid data={ridersNearByData}/>,
        },
        {
          key: '2',
          label: 'Store Riders',
          children: <StoreRiders data={storeRidersData}/>,
        }
      ];

    return (
        <div className='wrapper-process-orders-main bx-bg--white border-repel card-shadow pending-wrapper'>
            <div className="head-orders">
                <h2>Process Order</h2>
            </div>
            <div className="wrapper-inner">
                <Row gutter={[20, 20]}>
                    <Col xs={24} sm={24} md={24} lg={14}>
                        <div className='order-details'>
                            <Row gutter={[20, 20]}>
                                <Col lg={10}>
                                    <div className='order-image'>
                                        <Image src={orderDetails.orderImage} />
                                    </div>
                                </Col>
                                <Col lg={14}>
                                    <h3>{orderDetails.orderName}</h3>
                                    <h2>{orderDetails.orderPrice}</h2>
                                    <br />
                                    <div className="user-info-wrapper">
                                        <div className='user-info-bar'><div className='label'>Customer Name</div><p>{orderDetails.customerName}</p></div>
                                        <div className='user-info-bar'><div className='label'>Customer phone</div> <p>{orderDetails.customerContactNo}</p></div>
                                        <div className='user-info-bar'><div className='label'>Location</div><p>{orderDetails.location}</p></div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={10}>
                        <div className='dispatch'>
                        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ProcessOrder