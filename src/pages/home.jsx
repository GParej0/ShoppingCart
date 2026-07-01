import {Link} from "react-router"

export default function Home (){
    return (
    <div className="home-container">
      <div className="home-intro">
        <img src="" alt="Diamond" />
        <h1>Jewelry made to last</h1>
        <h2>Timeless pieces sourced from FakeStore's jewelery collection</h2>
        <Link to="products">Shop the collection</Link>
      </div>
      <div className="home-info">
        <h2>Why luxe.</h2>
        <ul>
          <li>
            <img src="" alt=""/>
            <h3>Certified pieces</h3>
            <p>Quality you can trust</p>
          </li>
          <li>
            <img src="" alt=""/>
            <h3>Gift ready</h3>
            <p>Packaged with care</p>
          </li>
          <li>
            <img src="" alt=""/>
            <h3>Free shipping</h3>
            <p>On every order</p>
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