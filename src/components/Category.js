import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CATEGORY_URL } from '../utils/constants';
import { useEffect,useState } from 'react';
import SingleCategoryCard from './SingleCategoryCard';
import { CATEGORY_IMG_URL } from '../utils/constants';

const Category = () => {

    const [catInfo, setCatInfo] = useState();
    

    useEffect(()=>{
        fetchCatData();
    },[]);

    const fetchCatData= async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.77390&lng=76.64870&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        const catInfoData = json?.data?.cards[0]?.card?.card?.imageGridCards?.info;
        // console.log(catInfoData[0])
        setCatInfo(catInfoData);
    }
    if (!catInfo || !Array.isArray(catInfo)) {
        return ;
      }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
      };

  return (
    <div>
        <div className='container mx-auto px-20 mb-16'>
            <div className="category-slider">
            <Slider {...settings}>
            {
                catInfo.map((singleCategory)=>
                    <SingleCategoryCard catData={singleCategory}/>
                )
            }
            </Slider>
            </div>
        </div>
    </div>
  )
}

export default Category