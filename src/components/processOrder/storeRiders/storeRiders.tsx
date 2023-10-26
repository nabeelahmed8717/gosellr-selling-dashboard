import React, { useState } from 'react'
import "./storeRiders.scss"
import { Button, Image } from 'antd'
import ActionModal from '../../../shared/actionModal/actionModal'

const StoreRiders = ({ data }: any) => {
    const [isSelectRider, setisSelectRider] = useState(false)
    const [activeId, setActiveId] = useState('')
    const [locationContents, setLocationContents] = useState('')


    const handelSelectRider = () => {
        setisSelectRider(false)
    }

    return (
        <div className="store-riders-wrapper">
            {
                data.map((item: any) => (
                    <div className="bx-rider">

                        <div className="wrapper-str">
                            <div className="inset">
                                <Image src={item.profileImage} width={40} height={40} style={{ border: "1px solid #e7e7e9", borderRadius: "50%" }} />
                                <div style={{ display: 'flex', flexDirection: "column", gap: '4px' }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                        <h4>{item.userName}</h4>
                                        <div className="location-est">{item.locationRounded} away</div>
                                    </div>
                                    {/* <h5>Current Delivery price: <span style={{ color: "#2980b9" }}>Rs. 100</span></h5> */}
                                    <div className="tags">
                                        {
                                            activeId === item.id ?
                                                <div className="tags-cm view-location dull-btn"
                                                    onClick={() => { setLocationContents(item.location); setActiveId('') }}
                                                >Hide Location</div>
                                                :
                                                <div className="tags-cm view-location"
                                                    onClick={() => { setLocationContents(item.location); setActiveId(item.id) }}
                                                >View location</div>
                                        }
                                    </div>
                                </div>

                            </div>

                            {!item.available ?
                                <div className="r-nv">
                                    <h3>Not Available</h3>
                                    <h4>Already assigned</h4>
                                    <p><strong>Order ID : {item?.assignedOrderId}</strong></p>
                                </div>
                                :
                                <>
                                {
                                    
                                    item.isConfirmRequest ? 
                                    <Button className='waiting-confirmation' loading={true}>Waiting confirmation</Button>
                                    :
                                    <Button className='select-rider' onClick={() => setisSelectRider(true)}>Select</Button>

                                }
                                    </>
                            }
                        </div>

                        {activeId === item.id &&
                            <div className="view-location">
                                Service Not Available
                            </div>}

                    </div>
                ))
            }

<ActionModal
                            isDeleteModalOpen={isSelectRider}
                            onClose={() => setisSelectRider(false)}
                            handelSubmit={handelSelectRider}
                            okText="Yes, Select Rider"
                            modalType='info'
                            headerContent='Confirmation Rider Selection'
                            content="Are you sure you want to select this rider"
                        />
        </div>
    )
}

export default StoreRiders