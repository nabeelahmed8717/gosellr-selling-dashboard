import React from 'react'
import PendingMain from './pendingMain/pendingMain'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import UnderProcess from './underProcess/underProcess';


const PendingOrders = () => {

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Pending Orders',
      children: <PendingMain />,
    },
    {
      key: '2',
      label: 'Under Process orders',
      children: <UnderProcess/>,
    },
  ];

  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  )
}

export default PendingOrders