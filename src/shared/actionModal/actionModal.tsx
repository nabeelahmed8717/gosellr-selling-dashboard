import React from 'react'
import "./actionModal.scss"
import { Button, Modal } from 'antd'

const ActionModal = ({isDeleteModalOpen,setIsDeleteModalOpen,modalType,headerContent,content}:any) => {
  return (
    <Modal centered title={<span className='light-grey'>{headerContent}</span>} open={isDeleteModalOpen} onCancel={()=>setIsDeleteModalOpen(false)} footer={false} wrapClassName='wrapper-action-modal'>
      <p className='fs-16 fw-500'>{content}</p>
      <div className='modal-buttons'>
        <Button className='delete-button'>Yes, delete</Button>
        <Button className='cancel-button' onClick={()=>setIsDeleteModalOpen(false)}>Cancel</Button>
      </div>
    </Modal>
  )
}

export default ActionModal