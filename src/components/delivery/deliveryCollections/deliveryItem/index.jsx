import React from 'react'
import './deliveryItem.css'

const DeliveryItem = ({item}) => {
  return (
    <div>
      <div className='delivery-item-cover cur-po'>
        <img src={item.cover} alt={item.title} className='delivery-item-img' />
      </div>
      <div className='delivery-item-title'>{item.title}</div>
    </div>
  )
}

export default DeliveryItem;
