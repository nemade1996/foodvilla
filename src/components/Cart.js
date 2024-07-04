import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice";
import emptycart from "../img/empty.png"
import CartItemList from "./CartItemList";

const Cart = () =>{

    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems)

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    // Calculate the total price
    const totalPrice = cartItems.reduce((total, item) => {
        return total + (item.card.info.price / 100) * item.quantity;
    }, 0);


    return(
        <div>
      <div className="relative m-auto flex w-5/6 flex-wrap pt-14 text-[#02060c]">
        <div className="mb-4">
          <h1 className="pb-2 text-2xl font-bold">Cart</h1>
        </div>
        <button
          className="absolute right-0 rounded-2xl border-2 border-slate-200 p-2"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="container mx-auto px-20 mt-16 mb-16">
        {cartItems.length === 0 ? (
          <div className="emptycart mb-14">
            <h6>Your cart is Empty :(</h6>
            <p>You can go to home page to view more restaurants</p>
            <img src={emptycart} alt="Empty Cart" />
          </div>
        ) : (
          
            <div>
            <CartItemList items={cartItems} />
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold">Total: ₹ {totalPrice.toFixed(2)}</h2>
              <button className="mt-4 bg-[#df1006] text-white py-2 px-4 rounded">
                Proceed to Pay
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    )
}

export default Cart