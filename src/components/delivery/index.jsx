import React from 'react'
import './delivery.css'
import Filters from '../filters';
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';
import ExploreSection from '../exploreSection';
import { restaurants } from '../../data/restaurants';

const Delivery = ({searchItem}) => {
  const deliveryFilter=[
    {
      id:1,
      icon:<i className="fa-solid fa-sliders absolute-center"></i>,
      title:"Filter"
    },
    {
      id:2,
      title:"Rating 4.0+"
    },
    {
      id:3,
      title:"Safe and Hygienic"
    },
    {
      id:4,
      title:"Pure Veg"
    },
    {
      id:5,
      icon:<i className="fa-solid fa-stopwatch absolute-center"></i>,
      title:"Delivery Time"
    },
    {
      id:6,
      title:"Great Offers"
    }
  ];

  const restaurantList =restaurants;
  // let restaurantList=frestaurantList.filter((elem)=>elem?.info?.cuisine[0]?.name?.toLowerCase() === searchItem.toLowerCase() )
  // if(searchItem===""){
  //   restaurantList=frestaurantList;
  // }
  
  return (
    <>
    <div className='max-width sticky-header'>

      <Filters filterList={deliveryFilter}/>
    </div>
      <DeliveryCollections/>
      <TopBrands/>
      <ExploreSection list ={restaurantList} collectionName="Delivery Restaurants in Kolkata"/>
    </>
  )
}

export default Delivery;
