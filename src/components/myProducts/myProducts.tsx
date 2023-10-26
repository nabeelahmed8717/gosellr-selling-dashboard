import React, { useState } from 'react'
import { dummyProducts } from '../../mock/dummyProducts'
import ProductCard from '../../shared/productCard/productCard'

import settingsSlidersIcon from "../../assets/icons/settings-sliders.svg"

import "./myProducts.scss"
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import ActionModal from '../../shared/actionModal/actionModal'

const MyProducts = () => {
    const navigate = useNavigate()
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    return (
        <div className='my-products-main-wrapper wrapper-orders-main bx-bg--white border-repel card-shadow pending-wrapper'>
            <div className='head-orders'>
                <h2>My Products</h2>
                <div className="d-flex" style={{gap:"10px",  flexWrap:"wrap"}}>
                <Button className='product-settings-button'><img src={settingsSlidersIcon} width={18} height={18} alt="" />Products Settings</Button>
                <Button onClick={() => navigate('/add-product')} className='add-product-button'>Add Product</Button>
                </div>
            </div>
            <div className="wrapper-product-display product-container">
                {
                    dummyProducts.map((item: any) => (
                        <ProductCard productData={item} setIsDeleteModalOpen={setIsDeleteModalOpen} />
                    ))
                }

            </div>
            <ActionModal
                isDeleteModalOpen={isDeleteModalOpen}
                onClose={()=> setIsDeleteModalOpen(false)}
                handelSubmit={()=> setIsDeleteModalOpen(false)}
                okText="Yes, Delete"
                modalType='delete'
                headerContent='Confirmation delete'
                content="Are you sure you want to delete this content ?"
            />
        </div>
    )
}

export default MyProducts