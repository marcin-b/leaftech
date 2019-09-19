import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Temperature from "./Temperature";
import Light from "./Light";
import Air from "./Air";
import Ventilation from "./Ventilation";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "stretch",
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 " + theme.spacing(2) + "px",
        height: "100%",
    },
}));

function getSteps() {
    return ["Light", "Temperature", "Air Quality", "Ventilation"];
}

function getStepContent(stepIndex, valueSetterPair) {
    switch (stepIndex) {
        case 0:
            return <Light {...valueSetterPair} />;
        case 1:
            return <Temperature {...valueSetterPair} />;
        case 2:
            return <Air {...valueSetterPair} />;
        case 3:
            return <Ventilation {...valueSetterPair} />;
        default:
            return "Finished! Thank you for your Input, Have a great day";
    }
}

const Survey = ({
    temperature,
    setTemperature,
    air,
    setAir,
    light,
    setLight,
    ventilation,
    setVentilation,
}) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const valueSettersPairs = [
        { light, setLight },
        { temperature, setTemperature },
        { air, setAir },
        { ventilation, setVentilation },
    ];

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
                            paddingBottom: 34,
                            height: "100%",
                            width: "66%",
                        }}
                    >
                        <TransitionGroup>
                            <CSSTransition
                                key={activeStep}
                                // in={location.key}
                                timeout={{ enter: 300, exit: 100 }}
                                classNames={"fade"}
                            >
                                {getStepContent(activeStep, valueSettersPairs[activeStep])}
                            </CSSTransition>
                        </TransitionGroup>
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Survey;
