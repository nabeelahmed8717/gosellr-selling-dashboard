import React from 'react'
import './storeProfile.scss'
import { Image, Tabs, TabsProps } from 'antd'
import starIcon from "../../assets/icons/fi-sr-star.svg"
import bgWrapp from "../../assets/raw/bbg.png"
import smileShop from "../../assets/raw/icon.jpg"
import BasicInformation from './profileTabs/basicInformation'

const StoreProfile = () => {

    const onChange = (key: string) => {
        console.log(key);
      };
      
      const items: TabsProps['items'] = [
        {
          key: '1',
          label: 'Profile and settings',
          children: <BasicInformation/>,
        },
        {
          key: '2',
          label: 'Privacy',
          children: 'Content of Tab Pane 2',
        },
        {
          key: '3',
          label: 'Perfornance',
          children: 'Content of Tab Pane 3',
        },
      ];
    
    return (
        <div className='wrapper-store-profile bx-bg--white border-repel card-shadow'>
            <div className="section-store-info">
                <div className="wrapper-profile-banner">
                    <img src={bgWrapp} alt="" />
                    {/* <Image src={bgWrapp} /> */}
                </div>
                <div className="store-profile-wrapper">
                    <div className="store-image">
                        {/* <img src={storeIcon} alt="" /> */}
                        <Image src={smileShop} style={{ borderRadius: "50%" }} />
                        <div className="badge-is-online"></div>
                    </div>
                    <div className="store-details">
                        <div className="main-details">
                            <h2>Smile Shop</h2>
                            <p>Store Level : <span>09</span></p>
                        </div>
                        <div className="profile-ratings">
                            <img src={starIcon} width={12} height={12} alt="" />
                            <span>5.6</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="wrapper-oth-content">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>

        </div>


    )
}

export default StoreProfile