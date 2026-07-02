import {Link} from "react-router"
import Diamond from "../assets/diamond-svgrepo-com.svg"
import Certificate from "../assets/certificate-badge-svgrepo-com.svg"
import Gift from "../assets/gift-svgrepo-com.svg"
import Shipping from "../assets/shipping-truck-svgrepo-com.svg"
export default function Home (){
    return (
    <div className="home-container">
      <div className="home-intro">
        <img src={Diamond} alt="Diamond" />
        <h1>Jewelry made to last</h1>
        <h2>Timeless pieces sourced from FakeStore's jewelery collection</h2>
        <Link to="products" className="cta-button">Browse the collection</Link>
      </div>
      <div className="home-info">
        <h2>Why luxe. ?</h2>
        <ul>
          <li>
            <img src={Certificate} alt="Certificate"/>
            <div>
            <h3>Certified pieces</h3>
            <p>Quality you can trust</p>
            </div>
          </li>
          <li>
            <img src={Gift} alt="Gift"/>
            <div>
            <h3>Gift ready</h3>
            <p>Packaged with care</p>
            </div>
          </li>
          <li>
            <img src={Shipping} alt="Shipping"/>
            <div>
            <h3>Free shipping</h3>
            <p>On every order</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="home-footer">
        <div>
          <h2>New arrival</h2>
          <p>This week's featured piece from the collection</p>
        </div>
        <Link to="products">Explore</Link>
      </div>
    </div>
  );
}