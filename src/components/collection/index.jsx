import React from 'react'
import './collection.css'
import Slider from 'react-slick'
import NextArrow from '../carousel/nextArrow';
import PrevArrow from '../carousel/prevArrow';

const Collection = ({list}) => {

    const settings = {
        infinite: false,
        // speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
      };


  return (
    <div className='collection-wrapper'>
      <div className='max-width collection'>
        <div className='collection-title'>Collections</div>
        <div className="collection-subtitle-row">
            <div className='collection-subtitle-text'>Explore curated lists of top restaurants, cafes, pubs, and bars in Kolkata, based on trends
            </div>
            <div className="collection-location">
            <div>All collections in Kolkata
            </div> 
            <i className="fa-solid fa-caret-right absolute-center collection-caret"></i>
        </div>
        </div>
        <Slider {...settings}>
            {list.map((item)=>{
                return (
                    <div>
                        <div className='collection-cover cur-po'>
                            <img src={item.cover} alt={item.title} className='collection-img'/>
                            <div className='gradient-bg'> 
                            </div>
                            <div className='collection-card-title'>{item.title}</div>
                            <div className='collection-card-subtitle'>
                                <div>{item.places}</div>
                                <i className="fa-solid fa-caret-right absolute-center collection-caret"></i>
                            </div>
                        </div>
                    </div>
                );
            })}
        </Slider>
      </div>
    </div>
  )
}

export default Collection
