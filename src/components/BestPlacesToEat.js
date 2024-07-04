import React, { useState , useEffect } from 'react'
import SingleBestPlaceToEat from './SingleBestPlaceToEat'

const BestPlacesToEat = () => {

    const [visibleCount , setVisibleCount] = useState(11);
    const [bestList,setBestList] = useState();

    useEffect(()=>{
        fetchBestList();
    },[]);

    const fetchBestList= async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.77390&lng=76.64870&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json?.data?.cards[6]?.card?.card?.brands);
        const bestData = json?.data?.cards[6]?.card?.card?.brands;
        setBestList(bestData);
    }
    // console.log(bestList);

    if (!bestList || !Array.isArray(bestList)) {
        return ;
      }

      const handleShowMore=()=>{
        setVisibleCount(
            (prevCount)=>prevCount + 8
        )
      }

  return (
    <div className='container mx-auto px-20 mb-16'>
        <h2 className='text-2xl font-bold text-gray-700 mb-30 mb-6'>Best Places to Eat Across Cities</h2>
        <div className='grid grid-cols-4 gap-7'>
            {
                bestList.slice(0,visibleCount).map((singleBestPlace)=>(
                    <SingleBestPlaceToEat bestInfoData={singleBestPlace}/>
                ))
            }
            {
                visibleCount < bestList.length && (
                    <button onClick={handleShowMore} className="bg-[#df1006] text-white py-2 px-4 rounded">Show More +</button>
                )
            }
        </div>
        
    </div>
  )
}

export default BestPlacesToEat