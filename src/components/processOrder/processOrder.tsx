import { Col, Image, Row } from 'antd';
import React from 'react'
import { useLocation } from 'react-router-dom';
import "./processOrder.scss"
import RidersGrid from '../../shared/ridersGrid/ridersGrid';
import { ridersNearByData } from '../../mock/ridersNearBy';

const ProcessOrder = () => {
    const location = useLocation();
    const { orderDetails } = location.state;

    console.log("orderDetails", orderDetails)
    return (
        <div className='wrapper-process-orders-main bx-bg--white border-repel card-shadow pending-wrapper'>
            <div className="head-orders">
                <h2>Process Order</h2>
            </div>
            <div className="wrapper-inner">
                <Row gutter={[20, 20]}>
                    <Col lg={16}>
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
                    <Col lg={8}>
                        <div className='dispatch'>
                           <RidersGrid data={ridersNearByData}/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ProcessOrder