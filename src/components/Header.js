import { useContext, useState } from "react";
import logo from "../img/logo.png"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { login, logout } from '../utils/loginSlice';


const Header =()=>{

    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

const [btnNameReact, setBtnNameReact] = useState("Login");

const onlineStatus = useOnlineStatus();

// const {loggedInUser} = useContext(UserContext);
// console.log(loggedInUser)

// subsscribing to the store using selector
const cartItems = useSelector((store)=>store.cart.items);
// console.log(cartItems)

    return(
        <div className="flex items-center justify-between p-1 shadow-lg bg-white header pr-5 pl-5">
            <div className="logo-container">
            <Link to="/"><img className="logo w-32" src={logo}/></Link>
            </div>
            <div className="nav-items">
                <ul className="flex gap-4">
                    <li>Netwrok Status : {onlineStatus == (true) ? "🟢" : "🟥"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>Restaurant</li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
                    {/* <li><button className="login-btn" onClick={()=>{
                        btnNameReact == "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }} >{btnNameReact}</button></li> */}

                    {isLoggedIn ? (
          <li><Link to="/logout">Logout</Link></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
                    {/* <li>{loggedInUser}</li> */}
                    
                </ul>
            </div>
        </div>
    )
}

export default Header;