import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import icon from "../logo.svg";

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
    thumb: {
        width: 21,
        height: 21,
        marginTop: -10,
    },
}));

function valuetext(value) {
    return `${value}`;
}

const Light = ({ light, setLight }) => {
    const classes = useStyles();

    return (
        <div className="survey-content-container">
            <h1>How is the Brightness?</h1>
            <img src={icon} style={{ width: 300 }} alt="icon" />
            <div>
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
