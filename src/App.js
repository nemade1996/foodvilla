    import React, { useEffect, useState, useContext } from "react";
    import ReactDOM from "react-dom/client";
    import Header from "./components/Header";
    import Body from "./components/Body";
    import RestaurantMenu from "./components/RestaurantMenu";
    import { BrowserRouter, RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
    import About from "./components/About";
    import Contact from "./components/Contact";
    import Error from "./components/Error";
    import 'font-awesome/css/font-awesome.min.css';
    import UserContext from "./utils/UserContext";
    import { Provider } from "react-redux";
    import appStore from "./utils/appStore";
    import Cart from "./components/Cart";
    import Footer from "./components/Footer"
    import Login from "./components/Login";




    const AppLayout =()=>{

        const [userName, setUserName] = useState();

        useEffect(()=>{
            const data = {
                name : "Neha",
            };
            setUserName(data.name)
        },[])


        return (
            <Provider store={appStore}>
                <UserContext.Provider value={{loggedInUser : userName}}>
                    <div className="app">
                        <Header />
                        <Outlet />
                        <Footer/>
                    </div>
                </UserContext.Provider>
            </Provider>
        );
    };

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <AppLayout />,
            children : [
                {
                    path : "/",
                    element : <Body />
                },
                {
                    path : "/about",
                    element : <About />
                },
                {
                    path : "/contact",
                    element : <Contact />
                },
                {
                    path : "/restaurants/:resId",
                    element : <RestaurantMenu />
                },
                {
                    path : "/cart",
                    element : <Cart />
                },
                {
                    path : "/login",
                    element : <Login/>
                }
            ],
            errorElement : <Error />,
        },
        
    ]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)