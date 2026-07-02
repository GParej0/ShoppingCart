import {Link} from "react-router"
import { useContext} from "react"
import { CartContext } from "../Context/CartContext"
export default function Nav(){

    const {cart} = useContext(CartContext)
    const totalItems = cart.reduce((acc, item)=>{
        return acc + item.quantity;    
    }, 0);

    return (
        <nav>
            <div className="title-container">
                <h3>luxe.</h3>
            </div>
            <div className="navlist">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="products">Products</Link></li>
                    <li><Link to="cart">Cart {totalItems>0 && <span className="totalItems">{totalItems}</span>}</Link></li>
                </ul>
            </div>
        </nav>
    )
}