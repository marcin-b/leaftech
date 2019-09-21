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

const Temperature = ({ temperature, setTemperature, icon }) => {
    const classes = useStyles();
    return (
        <div className="survey-content-container">
            <h1>
                What would be your wish for <b>temperature?</b>
            </h1>
            <div className="slider-container">
                <img src={icon} classes={classes.icon} className="icon" alt="icon" />
                <Slider
                    classes={{ track: classes.track, thumb: classes.thumb }}
                    max={100}
                    orientation="horizontal"
                    getAriaValueText={valuetext}
                    defaultValue={temperature}
                    onChange={(e, value) => setTemperature(value)}
                />
                <Typography className={classes.instructions}>
                    <span className={"scale-label-span"}>Too Cold</span>
                    <span className={"scale-label-span"}>Good</span>
                    <span className={"scale-label-span"}>Too Hot</span>
                </Typography>
            </div>
        </div>
    );
};
export default Temperature;
