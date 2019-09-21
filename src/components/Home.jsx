import React from "react";
import { Link } from "react-router-dom";
import startButton from "../assets/lets_start.png";

const Home = () => {
    return (
        <div style={{ paddingTop: "88px" }}>
            <h2>Build your Thermal Profile</h2>

            <p style={{ padding: "0px 34px", fontSize: 21 }}>
                The tool to design a space that adaps to your needs and preferences.
            </p>
            <Link to="/survey">
                <img src={startButton} />
            </Link>
            <br />
        </div>
    );
};
export default Home;
