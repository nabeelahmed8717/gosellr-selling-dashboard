import React from 'react'
import "./productCard.scss"
import { Button, Popover, Rate } from 'antd'
import { useNavigate } from 'react-router-dom'

import menuDotsIcon from "../../assets/icons/menu-dots.svg"

import editIcon from "../../assets/icons/edit-pencil.svg"
import deleteIcon from "../../assets/icons/delete.svg"
import hexagonCheckIcon from "../../assets/icons/hexagon-check.svg"
import viewIcon from "../../assets/icons/view.svg"

const ProductCard = ({ className, productData, setIsDeleteModalOpen }: any) => {
    const navigate = useNavigate()
    return (
        <div className='product-main-wrapper product-card-wrapper'>
            <Popover overlayClassName='main-shrt-menu-wrapper' trigger="hover" placement="rightTop" content={
                <div className='flex-menu-shrt' >
                    <div className='item-menu-shrt'><img src={editIcon} width={15} height={15} alt="" /><p>Edit Product</p></div>
                    <div className='item-menu-shrt' onClick={() => setIsDeleteModalOpen(true)}><img src={deleteIcon} width={15} height={15} alt="" /><p>Delete Product</p></div>
                    <div className='item-menu-shrt'><img src={viewIcon} width={15} height={15} alt="" /><p>View in GoSellr</p></div>
                    {
                        productData.verifications.length > 0 ?
                            null
                            : <div className='item-menu-shrt'><img src={hexagonCheckIcon} width={15} height={15} alt="" /><p>Go to Verification</p></div>  
                    }

                </div>
            }>
                <Button className='menu-options'><img width={14} style={{ marginTop: "5px" }} src={menuDotsIcon} alt="" /></Button>
            </Popover>
            <div className="product-image">
                <img src={productData?.productImage} alt="" />
            </div>
            <div className="roll-cage">
                <div className="product-title-and-discription">
                    <h3>{productData?.productLabel}</h3>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <Rate className="product-rating" disabled defaultValue={productData?.productRatings} />
                    <p style={{ fontSize: "12px", color: 'rgb(116 116 116)', marginTop: "6px" }}>( {productData?.productRatings} )</p>
                </div>
                <div className="badges-dept">
                    {
                        productData?.verifications.includes("EDR") &&
                        <div className='badge badge-edr'><span>EDR</span></div>
                    }
                    {
                        productData?.verifications.includes("PSS") &&
                        <div className='badge badge-pss'><span>PSS</span></div>
                    }

                </div>
                <div className='product-price'><span>{productData?.productPrice}</span></div>
            </div>
        </div>
    )
}

export default ProductCard