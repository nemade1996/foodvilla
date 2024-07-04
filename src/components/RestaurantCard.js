import {CDN_URL} from "../utils/constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RestaurantCard=(props)=>{
    // console.log(props);
    const {resData} = props;

    const {name,cuisines,avgRating,costForTwo,slaString} = resData?.info;

    return(
        
        <div className="restcard">
            <img src={CDN_URL + resData.info.cloudinaryImageId} />
            <h2 className="poppins-semibold text-xl">{name} </h2>
            <h3 className="poppins-medium">{cuisines.join(", ")}</h3>
            <p><FontAwesomeIcon icon={ faStar }/> {avgRating}</p>
            <p className="text-xs">{costForTwo}</p>
        </div>
    )
}

export const pureVegRestaurant = ()=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute rounded bg-green-700 text-white p-1">Pure Veg</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}



export default RestaurantCard;