import React, { useEffect, useRef, useState } from 'react'
import "./dashboard.scss"
import { Avatar, Button, Carousel, Col, Row } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import cartCheck from "../../assets/icons/shopping-cart-check.svg"
import { useNavigate } from 'react-router-dom'
import SalesOverview from './salesOverview/salesOverview';

import earnings from "../../assets/icons/earnings.svg"
import timeIcon from "../../assets/icons/time-quarter-to.svg"
import linkedIcon from "../../assets/icons/linked.svg"
import RecentOrders from './recentOrders/recentOrders';




const Dashboard = () => {
  const navigate = useNavigate()

  const [isMobile, setIsMobile] = useState(false);




  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleViewportChange(event: any) {
      setIsMobile(event.matches);
    }
    handleViewportChange(mediaQuery);
    mediaQuery.addListener(handleViewportChange);
    return () => {
      mediaQuery.removeListener(handleViewportChange);
    };
  }, []);


  return (
    <div className="dashboard-main-wrapper">
      <div className="head-wrapper-title">
        <div style={{ display: 'flex', justifyContent: "space-between" }}>
          <h3>Seller Dashboard</h3>
          <div className='head-ins'>
            <Button className='service-quality'>SQ-level : <strong>High</strong></Button>
          </div>
        </div>
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={6}>
          <div className="income-card-wrapper local-main-cards">
            <div className='flex-tit-icon'>
              <p>Account Balance</p>
              <div className="card-earnings ">
                <img src={earnings} width={18} height={18} alt="" />
              </div>
            </div>
            <h3 className='numbers-disp'>$ <span>2347.876</span></h3>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <div className="local-main-cards bx-bg--white border-repel card-shadow">
            <div className='flex-tit-icon'>
              <p>Total Pending Orders</p>
              <div className="card-icon">
                <img src={timeIcon} className="b--white-icon" width={18} height={18} alt="" />
              </div>
            </div>
            <h3 className='numbers-disp'><span>9804</span></h3>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <div className="local-main-cards bx-bg--white border-repel card-shadow">
            <div className='flex-tit-icon'>
              <p>Total Orders Today</p>
              <div className="card-icon-order">
                <img src={cartCheck} width={18} height={18} alt="" />
              </div>
            </div>
            <h3 className='numbers-disp'><span>30</span></h3>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6}>
          <div className="local-main-cards bx-bg--white border-repel card-shadow">
            <div className='flex-tit-icon'>
              <p>Linked Franchise</p>
              <div className="card-icon-order" style={{ backgroundColor: "#16a085" }}>
                <img src={linkedIcon} style={{ filter: "invert(1) brightness(36.5)" }} width={18} height={18} alt="" />
              </div>
            </div>
            <h3 className='numbers-disp'><span>30</span></h3>
          </div>
        </Col>
      </Row>

      {/* //franchise tables */}


      <Row gutter={[20, 20]} style={{ marginTop: "20px" }}>
        <Col xs={24} sm={24} md={24} lg={10}>
          <SalesOverview />
        </Col>
        <Col xs={24} sm={24} md={24} lg={14}>
          <RecentOrders />
        </Col>
      </Row>

      {/* <Row>
      <Col xs={24} sm={24} md={12} lg={14}>
          <RecentOrders/>
        </Col>
      </Row> */}


    </div>
  )
}

export default Dashboard