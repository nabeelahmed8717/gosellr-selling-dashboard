import React from 'react'
import "./actionModal.scss"
import { Button, Modal } from 'antd'

const ActionModal = ({isDeleteModalOpen,handelSubmit, okText, onClose ,modalType,headerContent,content}:any) => {


  const modalTypeProps:any = {
    'delete':'delete-button',
    'info':'info-button',
  }


  return (
    <Modal centered title={<span className='light-grey'>{headerContent}</span>} open={isDeleteModalOpen} onCancel={onClose} footer={false} wrapClassName='wrapper-action-modal'>
      <p className='fs-16 fw-500'>{content}</p>
      <div className='modal-buttons'>
        <Button className='cancel-button' onClick={onClose}>Cancel</Button>
        <Button className={`${modalTypeProps[modalType]}`} onClick={handelSubmit}>{okText}</Button>
      </div>
    </Modal>
  )
}

export default ActionModal