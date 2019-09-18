import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
    root: {
        height: 300,
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function valuetext(value) {
    return `${value}°C`;
}

const Temperature = () => {
    const classes = useStyles();
    return (
        <div>
            <h1>T-icon</h1>
            <div className={classes.root}>
                <Slider
                    orientation="vertical"
                    getAriaValueText={valuetext}
                    defaultValue={50}
                    aria-labelledby="vertical-slider"
                />
                <Typography className={classes.instructions}>
                    How is the Temperature?
                </Typography>
            </div>
        </div>
    );
};
export default Temperature;
