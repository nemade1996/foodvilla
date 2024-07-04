import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";
import { useState } from "react";


const ItemList =({items})=>{


    const [clickedCounts, setClickedCounts] = useState({});

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an action
        const currentCount = clickedCounts[item.card.info.id] || 0;
        dispatch(addItem(item))
        setClickedCounts({
            ...clickedCounts,
            [item.card.info.id]: currentCount + 1,
        });
    }


    const cartItems = useSelector((store)=>store.cart.items);
 
    // console.log(items)
    return(
        <div>
            {
                items.map((item)=>(
                    <div key={item.card.info.id}
                        className="single-fooditem flex w-[100%] flex-wrap justify-between text-sm">
                        <div className="fooditem-text w-[70%] flex-row pl-4">
                            <h3 className="font-semibold">{item.card.info.name}</h3>
                            <h4 className="mb-2 font-semibold">₹ {item.card.info.price/100}</h4>
                            <p>{item.card.info.description}</p>
                        </div>
                        <div className="fooditem-img flex w-[30%] flex-row-reverse pr-4 md:pr-7">
                            <div className="relative flex h-[82px]  w-[100%] items-start justify-end">
                                <div className="flex items-center justify-center">
                            <img className="h-[82px] w-[88px] rounded-xl bg-slate-300 object-cover shadow-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + item.card.info.imageId}/>
                            <button className="btn absolute -bottom-3 flex w-[50%] justify-between" onClick={()=>handleAddItem(item)}>{clickedCounts[item.card.info.id] === undefined ? 'add' : clickedCounts[item.card.info.id]}</button>
                            </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}

export default ItemList;