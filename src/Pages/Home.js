import React from "react";
import Layout from "../Components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from '../images/banner.jpeg'
import '../Styles/HomeStyle.css'

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className="headerContainer">
          <h1>Resturant Website</h1>
          <p>Best Resturant in India</p>
          <Link to='/menu'>   {/*to is used to redirect page or connect with another page same like as anchor tag*/}
            <button>ORDER NOW</button>
          </Link >
        </div>
      </div>
    </Layout>
  );
};

export default Home;
