import React from 'react'
import './header.css'
const Header = ({searchItem,setSearchItem}) => {
  return (
    <div className='max-width header'>
      <h2 className='header-logo'>FoodFiesta</h2>
      <div className='header-right'>
        <div className='header-location-search-container'>
            <div className="location-wrapper">
                <div className="location-icon-name">
                <i className="fa-solid fa-map-location-dot absolute-center location-icon"></i>
                <div>Kolkata</div>
                </div>
                <i className="fa-solid fa-caret-down absolute-center"></i>
            </div>
            <div className='location-search-separator'></div>
            <div className="header-searchbar">
            <i className="fa-solid fa-magnifying-glass absolute-center search-icon"></i>
            <input type="text" placeholder='Search for restaurant or a dish' className='search-input' />
            </div>
        </div>
        <div className='profile-wrapper'>
        <i className="fa-regular fa-user header-profile-img "></i>
        <span className='header-username'>Ankan</span>
        <i className="fa-solid fa-caret-down absolute-center"></i>
        </div>
      </div>
    </div>
  )
}

export default Header;
