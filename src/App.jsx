import Nav from "./components/Navbar";
import CartProvider from "./components/CartProvider";
import {Outlet} from "react-router"

export default function App(){
    return (
        <>
            <CartProvider>
                <Nav/>
                <Outlet/>
            </CartProvider>
        </>
    )
}