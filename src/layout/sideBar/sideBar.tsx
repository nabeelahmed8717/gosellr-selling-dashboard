import React from 'react'
import "./sideBar.scss"
import { Menu } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  CloudUploadOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';

import orderIcon from "../../assets/icons/orders.svg"
import productsIcon from "../../assets/icons/products.svg"
import settingsIcon from "../../assets/icons/settings.svg"
import packagesIcon from "../../assets/icons/packages.svg"
import marketingIcon from "../../assets/icons/marketing.svg"
import verificationIcon from "../../assets/icons/check-circle.svg"
import analysisIcon from "../../assets/icons/analysis.svg"
import guideIcon from "../../assets/icons/memo-pad.svg"
import BrandIcon from "../../assets/brandAssets/brand-logo-selling.svg"

import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const SideBar = () => {

  const navigate = useNavigate()
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
    getItem(<div onClick={() => navigate('./home')}>Dashboard</div>, '1', <PieChartOutlined />),
  
    getItem(<div>Orders</div>, 'sub1', <img src={orderIcon} width={15} height={15} alt="" />, [
      getItem(<div onClick={() => navigate('./orders/pending-orders')}>Pending Orders</div>, '2'),
      getItem(<div onClick={() => navigate('./orders/decline-orders')}>Decline Orders</div>, '3'),
      getItem(<div onClick={() => navigate('./orders/completed-orders')}>Completed Ordes</div>, '4'),
    ]),
    getItem(<div onClick={() => navigate('./my-products')} >Products</div>, '5', <img src={productsIcon} width={15} height={15} alt="" />),
    getItem(<div onClick={() => navigate('./store-settings')}>Store Settings</div>, '6', <img src={settingsIcon} width={15} height={15} alt="" />),
    getItem(<div onClick={() => navigate('./packages')} >Packages</div>, '7', <img src={packagesIcon} width={15} height={15} alt="" />),
    getItem(<div onClick={() => navigate('./marketing')}>Marketing</div>, '8', <img src={marketingIcon} width={15} height={15} alt="" />),
    getItem(<div onClick={() => navigate('./product-verification')}>Product Verification</div>, '9', <img src={verificationIcon} width={15} height={15} alt="" />),
    getItem(<div>Reports</div>, '10', <img src={analysisIcon} width={15} height={15} alt="" />),
    getItem(<div>User Guides</div>, '11', <img src={guideIcon} width={15} height={15} alt="" />),

  ];

  return (
    <div className='main-sidebar-wrapper'>
      <div className="logo-main-area">
        <img src={BrandIcon} width={120} alt="" />
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="light"
        items={items}
      />
    </div>
  )
}

export default SideBar