import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Temperature from "./Temperature";

const useStyles = makeStyles(theme => ({
    root: {
        width: "90%",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        paddingBottom: theme.spacing(1),
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    surveyContent: {
        height: "100%",
    },
}));

function getSteps() {
    return ["Temperature", "Air Quality", "Light", "Ventilation"];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <Temperature />;
        case 1:
            return "How would you rate the air quality?";
        case 2:
            return "Do you like the lighting?";
        case 3:
            return "DO you have a good flow?";
        default:
            return "Finished! Thank you for your Input, Have a great day";
    }
}

const Survey = ({
    temperature,
    setTemperature,
    humidity,
    setHumidity,
    light,
    setLight,
    ventilation,
    setVentilation,
}) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    function handleReset() {
        setActiveStep(0);
    }
    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className={classes.surveyContent}>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed
                        </Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "column",
                            paddingBottom: 13,
                            height: "100%",
                        }}
                    >
                        <Typography className={classes.instructions}>
                            {getStepContent(activeStep)}
                        </Typography>
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                            >
                                {activeStep === steps.length - 1
                                    ? "Finish"
                                    : "Next"}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Survey;
