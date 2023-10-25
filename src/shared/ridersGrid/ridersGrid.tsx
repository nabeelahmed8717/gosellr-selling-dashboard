import React, { useState } from 'react'
import "./ridersGrid.scss"
import { Image } from 'antd'

const RidersGrid = ({ data }: any) => {
    const [activeId, setActiveId] = useState('')
    const [locationContents, setLocationContents] = useState('')
    return (
        <div className="riders-main-wrapper">
            {
                data.map((item: any) => (
                    <div className="bx-rider">
                        <div className="inset">
                            <Image src={item.profileImage} width={40} height={40} style={{ border: "1px solid #e7e7e9", borderRadius: "50%" }} />
                            <div style={{ display: 'flex', flexDirection: "column", gap: '4px' }}>
                                <h4>{item.userName}</h4>
                                Current Delivery price: Rs.20
                                <div className="tags">
                                    <div className="tags-cm location-est">{item.locationRounded} away</div>
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
                        {activeId === item.id &&
                            <div className="view-location">
                                Service Not Available
                            </div>}
                    </div>
                ))
            }
        </div>
    )
}

export default RidersGrid