import React from 'react'
import './diningOut.css'
import Collection from '../collection'
import { diningOut } from '../../data/diningOut'
import Filters from '../filters'
import ExploreSection from '../exploreSection'

const DiningOut = () => {

  const collectionList = [
    {
      id:1,
      title:"Newly Opened Restaurants",
      cover:"https://b.zmtcdn.com/data/collections/8868e7345d624a79d5900711eb5f8d00_1696923263.png?output-format=webp",
      places:"12 places"
    },
    {
      id:2,
      title:"Best in Kolkata",
      cover:"https://b.zmtcdn.com/data/collections/43ce271d3eba317d9174828a78fc56fa_1702619696.png?output-format=webp",
      places:"25 places"
    },
    {
      id:3,
      title:"Best Korean Restaurant in Kolkata",
      cover:"https://b.zmtcdn.com/data/collections/57f7f839a8594abf4764d47d67151f68_1687954533.png?output-format=webp",
      places:"7 places"
    },
    {
      id:4,
      title:"Finest Microbreweries",
      cover:"https://b.zmtcdn.com/data/collections/c303690883c0b1c0c841a62c3f5942b6_1695623169.png?output-format=webp",
      places:"9 places"
    },
    {
      id:5,
      title:"Great Buffets",
      cover:"https://b.zmtcdn.com/data/collections/038023025a7859881a3fa3b3b1c93416_1675231457.jpg?output-format=webp",
      places:"14 places"
    },
    {
      id:6,
      title:"Places for Lip-smacking Fish",
      cover:"https://b.zmtcdn.com/data/collections/1e488a8fd46bd32e8cf2fcdbd1170640_1675238604.jpg?output-format=webp",
      places:"10 places"
    },
    {
      id:7,
      title:"Best Insta-worthy Places",
      cover:"https://b.zmtcdn.com/data/collections/1dedf8663e048ac43b27f2441cb81068_1696923191.png?output-format=webp",
      places:"16 places"
    },
    {
      id:8,
      title:"Blissful Breakfast Places",
      cover:"https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054191.jpg?output-format=webp",
      places:"14 places"
    }
  ]

  const diningFilter=[
    {
      id:1,
      icon:<i class="fa-solid fa-sliders absolute-center"></i>,
      title:"Filter"
    },
    {
      id:2,
      icon:<i class="fa-solid fa-chess-king absolute-center" ></i>,
      title:"Gold"
    },
    {
      id:3,
      title:"Rating 4.0+"
    },
    {
      id:4,
      title:"Outdoor Seating"
    },
    {
      id:5,
      title:"Serves Alcohol"
    },
    {
      id:6,
      title:"Open Now"
    }
  ];

  const diningOutList= diningOut;

  return (
    <div>
      <Collection list={collectionList}/>
      <div className='max-width sticky-header'>
        <Filters filterList={diningFilter}/>
      </div>
      <ExploreSection list={diningOutList} collectionName="Trending dining restaurants in Kolkata"/>
    </div>
  )
}

export default DiningOut
