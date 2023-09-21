import React from 'react'
import "./sqPackages.scss"
import { Card, Col, Row } from 'antd'


const packagesData = [
    {
        title: 'BASIC',
        list: [
            "Eligible for store KYC",
            "Eligible for product verification",
        ]
    },
    {
        title: 'STANDARD',
        list: [
            "Eligible for store KYC",
            "Eligible for product verification",
            "Eligible for product verification",
            "Eligible for product verification",
        ]
    },
    {
        title: 'HIGH',
        list: [
            "Eligible for store KYC",
            "Eligible for product verification",
        ]
    },
    {
        title: 'PREMIUM',
        list: [
            "Eligible for store KYC",
            "Eligible for product verification",
        ]
    },
]

const SqPackages = () => {
    return (
        <div className='packages-main-wrapper wrapper-orders-main bx-bg--white border-repel card-shadow pending-wrapper'>
            <div className='head-packages'>
                <h2>My Packages</h2>
            </div>
            <div className="current-package">
                <Row gutter={20}>
                    <Col>
                        <div className="wrap-info-pack">
                            <h5>Current package</h5>
                            <h3>Basic</h3>
                        </div>
                    </Col>
                    <Col>
                        <div className="wrap-info-pack">
                            <h5>Next package</h5>
                            <h3>Standard</h3>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row gutter={[20, 20]}>
                {
                    packagesData.map((item: any) => (
                        <Col sm={4} md={6} lg={6}>
                            <Card>
                                <div className="wrapper-packages-card">
                                    <h3>{item.title}</h3>
                                    <div className="wrapper-package-details">
                                        <ul>
                                            {
                                                item.list.map((content: any) => (
                                                    <li>{content}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))
                }

            </Row>
        </div>
    )
}

export default SqPackages