import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Quickly use below links to navigate through all pages.
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/eventlandingpage" style={{ color: "#87CEFA", textDecoration: "none" }}>
            EventLandingPage
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/eventinternalpage" style={{ color: "#87CEFA", textDecoration: "none" }}>
            EventInternalPage
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/myprofile" style={{ color: "#87CEFA", textDecoration: "none" }}>
            MyProfile
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/getstartedscreen" style={{ color: "#87CEFA", textDecoration: "none" }}>
            GetStartedScreen
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
