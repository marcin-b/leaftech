import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import thumb from "../assets/thumb.png";

const useStyles = makeStyles(theme => ({
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        display: "flex",
        justifyContent: "space-between",
    },
    track: {
        backgroundColor: "transparent",
    },
    icon: { width: 119, alignSelf: "flex-start" },
    thumb: {
        width: 41,
        height: 41,
        marginTop: -19,
        marginLeft: -19,
        borderRadius: 15,
        backgroundColor: "transparent",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        background: `url(${thumb})`,
    },
}));

function valuetext(value) {
    return `${value}`;
}

const Light = ({ light, setLight, icon }) => {
    const classes = useStyles();

    return (
        <div className="survey-content-container">
            <h1>
                What would be your wish for <b>brightness?</b>
            </h1>
            <img src={icon} classes={classes.icon} className="icon" alt="icon" />
            <div className="slider-container">
                <Slider
                    classes={{ track: classes.track, thumb: classes.thumb }}
                    max={100}
                    orientation="horizontal"
                    getAriaValueText={valuetext}
                    defaultValue={light}
                    onChange={(e, value) => setLight(value)}
                />
                <Typography className={classes.instructions}>
                    <span className="scale-label-span">Too Dark</span>
                    <span className="scale-label-span">Good</span>
                    <span className="scale-label-span">Too Bright</span>
                </Typography>
            </div>
        </div>
    );
};
export default Light;
