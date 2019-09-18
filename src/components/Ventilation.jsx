import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const Ventilation = () => {
    return (
        <div>
            <h1>LeafTech Feedback stystem</h1>
            Welcome to the Leaftech feedback system.
            <br />
            <Link to="/survey">
                <Button color="primary">Sart the Surevey</Button>
            </Link>
            <br />
        </div>
    );
};
export default Ventilation;
