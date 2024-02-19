import { Button, Card, Input, Table, Tabs } from 'antd';
import React from 'react'

import increaseImage from '../../assets/images/increase.png'

import './ehbWallet.scss'

const { TabPane } = Tabs;

const EhbWallet = () => {

  const transactions = [
    { type: 'Deposit', amount: 100.00, date: '2024-02-16 10:30 AM' },
    { type: 'Withdraw', amount: 50.00, date: '2024-02-15 02:45 PM' },
    { type: 'Deposit', amount: 75.00, date: '2024-02-14 08:15 AM' },
  ];

  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text: any) => `$${text.toFixed(2)}`,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];


  return (
    <div className='main-wallet-ess'>
      <h1>EHB Wallet </h1>
      <br />
      <br />
      <div className="wallet-card">
        <div>
          <h2 className='wallet-head'>Balance</h2>
          <h2 className='ammount-main'><span>$</span>5,878.98</h2>
        </div>
        <img src={increaseImage} width={100} alt="" />
      </div>

      <div style={{ padding: "0px 10px" }}>
        <Tabs defaultActiveKey="1" style={{ width: '100%', marginBottom: '20px' }}>
          <TabPane tab="All Transactions" key="1">
            <Table dataSource={transactions} columns={columns} />
          </TabPane>
          <TabPane tab="Deposits" key="2">
            <Table
              dataSource={transactions.filter((transaction) => transaction.type === 'Deposit')}
              columns={columns}
            />
          </TabPane>
          <TabPane tab="Withdrawals" key="3">
            <Table
              dataSource={transactions.filter((transaction) => transaction.type === 'Withdraw')}
              columns={columns}
            />
          </TabPane>
        </Tabs>
      </div>

    </div>
  )
}

export default EhbWallet