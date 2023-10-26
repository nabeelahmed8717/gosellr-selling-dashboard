import React, { useState } from 'react'
import "./ridersGrid.scss"
import { Button, Image } from 'antd'
import backIcon from '../../assets/icons/angle-left.svg'
import sendIcon from "../../assets/icons/send-icon.svg"
import TextArea from 'antd/es/input/TextArea'
import ActionModal from '../actionModal/actionModal'

const RidersGrid = ({ data }: any) => {
    const [isCloseChat, setisCloseChat] = useState(false)
    const [activeId, setActiveId] = useState('')
    const [locationContents, setLocationContents] = useState('')
    const [activeChatContents, setActiveChatContents] = useState<any>()

    const [paddingBottom, setPaddingBottom] = useState(0)


    const handleInput = (event: any) => {
        event.target.style.height = '40px';
        event.target.style.height = `${event.target.scrollHeight}px`;

        if (event.target.scrollHeight > 60) {
            event.target.style.borderRadius = '10px';
            // for padding 
            const additionalPadding = event.target.scrollHeight - 60;
            const newPaddingBottom = Math.min(additionalPadding, 175); // Limit the padding to 175px
            setPaddingBottom(newPaddingBottom);

        } else {
            event.target.style.borderRadius = '60px';
            setPaddingBottom(0);
        }
        if (event.target.scrollHeight > 90) {
            event.target.style.overflow = 'scroll';
        }
        else {
            event.target.style.overflow = 'hidden';
        }
    };

    const handelCloseChat = () => {
        setActiveChatContents('')
        setisCloseChat(false)
    }

    return (
        <div className="riders-main-wrapper">

            {
                activeChatContents ?
                    <>
                        <div className="chat-contents">
                            <div className="chat-header">
                                <Button className='back-btn' onClick={() => setisCloseChat(true)}><img src={backIcon} width={15} height={15} alt="" /></Button>
                                <div className="user-cont">
                                    <img src={activeChatContents.profileImage} width={40} height={40} style={{ borderRadius: "50%" }} alt="" />
                                    <div className='nnc'>
                                        <div className='tg-grp'>
                                            <h4>{activeChatContents.userName}</h4>
                                            <div className="tags-cm location-est">{activeChatContents.locationRounded} away</div>
                                        </div>
                                        <span style={{ color: "#27ae60" }}>online</span>
                                    </div>
                                </div>
                            </div>

                            <div className="chat-area" style={{ paddingBottom: `${paddingBottom}px` }}>
                                <div className="roll-over receiver-ms">
                                    <div className="chat-bx">
                                        <span>consectetur adipisicing elit.</span>
                                    </div>
                                </div>

                                <div className="roll-over sender-ms">
                                    <div className="chat-bx">
                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maxime, officia, ea sed saepe magnam voluptatibus</span>
                                    </div>
                                </div>

                            </div>

                            <div className="chat-sender-area">
                                <TextArea placeholder="Type a message" className='textarea-autosize' style={{ height: '40px' }} onInput={handleInput} />
                                <img src={sendIcon} width={20} height={20} alt="" />
                            </div>
                        </div>
                        <ActionModal
                            isDeleteModalOpen={isCloseChat}
                            onClose={() => setisCloseChat(false)}
                            handelSubmit={handelCloseChat}
                            okText="Yes, Close Chat"
                            modalType='info'
                            headerContent='Confirmation Chat Close'
                            content="Are you sure you want to quit chat ?"
                        />
                    </>
                    :
                    <>
                        {
                            data.map((item: any) => (
                                <div className="bx-rider">
                                    <div className="inset">
                                        <Image src={item.profileImage} width={40} height={40} style={{ border: "1px solid #e7e7e9", borderRadius: "50%" }} />
                                        <div style={{ display: 'flex', flexDirection: "column", gap: '4px' }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                                <h4>{item.userName}</h4>
                                                <div className="location-est">{item.locationRounded} away</div>
                                            </div>
                                            <h5>Current Delivery price: <span style={{ color: "#2980b9" }}>Rs. 100</span></h5>
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

                                                <div className="tags-cm view-location"
                                                    onClick={() => setActiveChatContents(item)}
                                                >Chat</div>
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
                    </>

            }

        </div>
    )
}

export default RidersGrid