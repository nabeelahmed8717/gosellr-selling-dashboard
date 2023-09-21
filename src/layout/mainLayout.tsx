import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import homeIcon from "../assets/icons/home-res.svg"
import cartIcon from "../assets/icons/cart-res.svg"
import chat from "../assets/icons/fi-rr-comment.svg"
import trendingIcon from "../assets/icons/trending-res.svg"
import plusIcon from "../assets/icons/plus-hex-icon.svg"
import plusGif from "../assets/icons/animated/plus.gif"
import orderIcon from "../assets/icons/orders.svg"
import productsIcon from "../assets/icons/products.svg"
import settingsIcon from "../assets/icons/settings.svg"
import packagesIcon from "../assets/icons/packages.svg"
import marketingIcon from "../assets/icons/marketing.svg"
import verificationIcon from "../assets/icons/check-circle.svg"
import analysisIcon from "../assets/icons/analysis.svg"
import guideIcon from "../assets/icons/memo-pad.svg"


import NavBar from './navBar/navBar'

import "./mainLayout.scss"
import { Button, Col, Modal, Popover, Row } from 'antd'
import CreateModalSpec from '../shared/createModalSpec/createModalSpec'

// import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import SideBar from './sideBar/sideBar'

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {

    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState<any>(false);
    const [visible, setVisible] = useState(false);
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
        <>
            <Row>
                {!isMobile &&
                    <Col xs={6} sm={6} md={6} lg={4}>
                        <SideBar />
                    </Col>
                }
                <Col xs={24} sm={24} md={18} lg={20}>
                    <NavBar />
                    <div className="wrapper-layout-outlet">
                        <Outlet />
                    </div>
                </Col>
            </Row>


            {/* <div style={{ paddingBottom: `${isMobile ? '60px' : '0px'}` }}>
                
            </div> */}
            {
                isMobile &&
                <>
                    <div className='bottom-nav-bar'>
                        <div className="nav-icons-box" onClick={() => navigate('./home')}>
                            <img src={homeIcon} width={21} height={21} alt="" />
                            <div>Home</div>
                        </div>
                        <div className="nav-icons-box" onClick={() => navigate('./my-products')}>
                            <img src={productsIcon} width={22} height={21} alt="" />
                            <div>My Products</div>
                        </div>
                        <div className="nav-icons-box" onClick={() => navigate('./add-product')}>
                            <img src={plusIcon} width={30} height={30} alt="" />
                            <div></div>
                        </div>

                        <Popover rootClassName='wrapper-orders-nav' content={
                            <div className='orders-nav-wrapper'>
                                <p onClick={() => navigate('./orders/pending-orders')} >Pending orders</p>
                                <p onClick={() => navigate('./orders/completed-orders')} >Confirmed orders</p>
                                <p onClick={() => navigate('./orders/decline-orders')} >Decline orders</p>
                            </div>
                        } title={<span className='light-grey'>Orders</span>} trigger="click">
                            <div className="nav-icons-box">
                                <img src={orderIcon} width={21} height={20} alt="" />
                                <div>Orders</div>
                            </div>
                        </Popover>
                        <div className="nav-icons-box" onClick={() => navigate('./home')}>
                            <img src={guideIcon} width={21} height={21} alt="" />
                            <div>Guide</div>
                        </div>
                    </div>
                </>
            }

        </>
    )
}

export default MainLayout