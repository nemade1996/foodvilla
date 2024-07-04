import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setShowIndex}) =>{
    // console.log(data)

    // const [showItems, setShowItems] = useState(false);

    const handleClick =()=>{
        // console.log("clicked")
        setShowIndex()
    }

    return(
        <div>
            <div className="font-semibold accordian-title cursor-pointer relative z-10 mt-5 flex items-center justify-between rounded-b-2xl border-b-2 bg-white p-3 text-[#02060c] opacity-100" onClick={handleClick}>
                <h5>{data.title} ({data.itemCards.length})</h5>
            </div>

            {showItems && <ItemList items={data.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory