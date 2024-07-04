
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useEffect, useState } from "react";
import star from "../img/star.png";


const RestaurantMenu =()=>{

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null)


    if(resInfo === null) return <Shimmer/>;
    // console.log(resInfo?.cards[2]?.card?.card)

    const { name, costForTwoMessage, avgRating,locality,city,cuisines} = resInfo?.cards[2]?.card?.card?.info  || {};
    
    const {itemCards} = resInfo?.cards[2]?.card.card.info || {};
    // console.log(itemCards)

    // console.log(resInfo?.cards[2]?.card.card.info.name)

    const categories = 
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categories)

    return (
        <div>
            <div className="single-restaurant-header">
                <div className="single-restaurant-text bg-gray-50 shadow-lg">
                    <h1 className="border-b border-solid border-gray-300 pb-2">{name}</h1>
                    <p className="font-semibold text-lg">{cuisines.join(" , ")}</p>
                    <div className="flex pt-2">
                        <div className="w-6/12">
                            <h2 className="flex"><img src={star} className="w-4 h-4 mr-2"/>Rating : {avgRating}</h2>
                            <h3 className="text-left">{costForTwoMessage}</h3>
                        </div>
                        <div className="w-6/12">
                            <h2 className="text-right">{locality}</h2>
                            <h3 className="text-right">{city}</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center single-restaurant-detail">
                <div className="container mx-auto px-20 mt-16 mb-16">
                    <div>
                        {categories.map((category, index)=>(
                            // Controlled Component
                            <RestaurantCategory 
                            key={category?.card?.card?.title} 
                            data={category?.card?.card}
                            showItems = {index === showIndex ? true : false}
                            setShowIndex ={()=> setShowIndex(index)}
                            >

                            </RestaurantCategory>
                        ))} 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;