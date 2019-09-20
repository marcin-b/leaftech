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

const Ventivation = ({ ventilation, setVentilation }) => {
    const classes = useStyles();
    return (
        <div className="survey-content-container">
            <h1>How is the Air Flow?</h1>
            <div>
                <img src={icon} style={{ width: 300 }} alt="icon" />
                <Slider
                    classes={{ track: classes.track, thumb: classes.thumb }}
                    max={100}
                    orientation="horizontal"
                    getAriaValueText={valuetext}
                    defaultValue={ventilation}
                    onChange={(e, value) => setVentilation(value)}
                />
                <Typography className={classes.instructions}>
                    <span className={"scale-label-span"}>Too Stale</span>
                    <span className={"scale-label-span"}>Good</span>
                    <span className={"scale-label-span"}>Too Strong</span>
                </Typography>
            </div>
        </div>
    );
};
export default Ventivation;
