import RestaurantCard, {pureVegRestaurant} from "./RestaurantCard"
import resList from "../utils/mockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Footer from "./Footer";
import Category from "./Category";
import BestPlacesToEat from "./BestPlacesToEat";



const Body=()=>{

    const [listOfRestaurant ,setListOfRestaurant] = useState([]);
    const [filteredRestaurant ,setFilteredRestaurant] = useState([]);

    const [searchText , setSearchText] = useState("");

    RestaurantCardPureVeg = pureVegRestaurant(RestaurantCard);
    
    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData= async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.51600&lng=76.21570&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();

        // optional chaining
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // console.log(setListOfRestaurant);

    }

    // console.log(filteredRestaurant)
    // console.log(listOfRestaurant)

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>You are offline.</h1>
    
    return listOfRestaurant.length===0 ? <Shimmer></Shimmer> :(
        <>
        
        <Category/>
        <div className="home-cards-wrap">
            <div class="container mx-auto px-20">
            <div className="filter-box flex align-middle gap-4 justify-end my-8">
                <div className="search flex">
                    <input type="text" className="searchbox" value={searchText} onChange={
                        (e)=>{setSearchText(e.target.value)}
                    } />
                    <button className="search-btn" onClick={()=>{
                        console.log(searchText);

                        const filteredRestaurant = listOfRestaurant.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurant(filteredRestaurant);
                    }}> Search </button>
                </div>


                <button className="filter-btn btn" onClick={()=>{
                    const filteredList = listOfRestaurant.filter(
                        (res)=>res.info.avgRating  > 4.4 )
                        setFilteredRestaurant(filteredList)
                }}>Top Rated Restaurant</button>
            </div>
            </div>
        </div>

        <div className="container mx-auto px-20 mb-16">
        <div className="grid grid-cols-5 gap-7">
          {filteredRestaurant?.map((restaurant)=>(
            <Link key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}>
                {restaurant.info.veg ?  (
                <RestaurantCardPureVeg resData={restaurant}/>
                ) : (
                <RestaurantCard resData={restaurant}/>
                )}
            </Link>
          ))}
        </div>
        </div>
        <BestPlacesToEat/>

        </>
    )
}


export default Body