import React from 'react'
import wrapperMarketing from '../../assets/wrapper/marketing-comming-soon.png';

const Marketing = () => {
  return (
    <div className=' bx-bg--white border-repel card-shadow pending-wrapper'
    style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        position:"relative",
        flexDirection:"column"
    }}
    >
        <p
        style={{
            textAlign:"center",
            marginTop:'20px',
            marginBottom:"20px",
            fontSize:'20px',
            fontWeight:"500"
        }}
        >EHB Marketing -- Coming Soon</p>
        <img src={wrapperMarketing} style={{ width:'80vw'}} alt="" />
        
    </div>
  )
}

export default Marketing