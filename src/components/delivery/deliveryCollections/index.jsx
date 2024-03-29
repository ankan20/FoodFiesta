import React from 'react'
import './dlvCollections.css'
import Slider from "react-slick";
import NextArrow from '../../carousel/nextArrow';
import PrevArrow from '../../carousel/prevArrow';
import DeliveryItem from './deliveryItem';
const DeliveryCollections = () => {
    const deliveryItems =[
        {
            id:1,
            title :"Pizza",
            cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
        },
        {
            id:2,
            title :"Biryani",
            cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
        },
        {
            id:3,
            title :"Chicken",
            cover:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
        },
        {
            id:4,
            title :"Thali",
            cover:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
        },
        {
            id:5,
            title :"Fried Rice",
            cover:"https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
        },
        {
            id:6,
            title :"Rolls",
            cover:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
        },
        {
            id:7,
            title :"Burger",
            cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        },
        {
            id:8,
            title :"North Indian",
            cover:"https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg",
        },
        {
            id:9,
            title :"Chilli Chicken",
            cover:"https://b.zmtcdn.com/data/dish_images/2de9197c25059c0d61efc8566c6919961615960350.png",
        },
        {
            id:10,
            title :"Chowmein",
            cover:"https://b.zmtcdn.com/data/o2_assets/c21624eac87ed1c8c87ef1ea52980ded1632716659.png",
        },
        {
            id:11,
            title :"Panner",
            cover:"https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
        }
    ]

    const settings = {
        infinite: false,
        // speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
      };



  return (
    <div className='delivery-collection'>
      <div className='max-width'>
        <div className='collection-title'>Eat what makes you happy</div>
        <Slider {...settings}>
            {deliveryItems.map((item)=>{
                return (
                <div>
                    <DeliveryItem item={item}/>
                </div>
                )
            })}
        </Slider>
      </div>
    </div>
  )
}

export default DeliveryCollections
