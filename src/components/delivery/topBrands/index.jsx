import React from 'react'
import './topBrands.css'
import NextArrow from '../../carousel/nextArrow';
import PrevArrow from '../../carousel/prevArrow';
import Slider from 'react-slick';

const TopBrands = () => {

    const BrandList = [
        {
            id:1,
            title:"WOW! Momo",
            time:"32 min",
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/3a58b67479fd290ff96996002438736e_1672389253.png?output-format=webp"
        },
        {
            id:2,
            title:"KFC",
            time:"30 min",
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/560b209a689eefa9feb367b5d5604097_1611382952.png?output-format=webp"
        },
        {
            id:3,
            title:"Arsalan",
            time:"34 min",
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/fe5db95ae85292933996d4043f600d3b_1611320738.png?output-format=webp"
        },
        {
            id:4,
            title:"Burger King",
            time:"31 min",
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188103.png?output-format=webp"
        },
        {
            id:5,
            title:"Mio Amore",
            time:"23 min",
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/f9eef3c0e4df808bd5590eefdf5c9c1d_1677580200.png?output-format=webp"
        },
        {
            id:6,
            title:"Gupta Brothers",
            time:"18 min",
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/a2531dc570196c0cd9322814eb010d94_1605102324.png?output-format=webp"
        },
        {
            id:7,
            title:"Pizza Hut",
            time:"38 min",
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp"
        },
        {
            id:8,
            title:"Kasturi Restaurant",
            time:"59 min",
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/94e8d80f54135ba39669774c68e9ecff_1567764102.png?output-format=webp"
        },
        {
            id:9,
            title:"Subway",
            time:"31 min",
            cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520462.png?output-format=webp"
        }
    ]

    const settings = {
        infinite: false,
        // speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>
      };

  return (
    <div className='top-brands max-width'>
      <div className='collection-title'>Top brands for you</div>
      <Slider {...settings}>
        {BrandList.map((brand)=>{
            return (
                <div>
                    <div className='top-brands-cover cur-po'>
                        <img src={brand.cover} alt={brand.title} className='top-brands-img'/>
                    </div>
                    <div className='top-brands-title'>{brand.title}</div>
                    <div className='top-brands-time'>{brand.time}</div>
                </div>
            )
        })}
      </Slider>
    </div>
  )
}

export default TopBrands;
