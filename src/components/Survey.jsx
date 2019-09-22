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
import Humidity from "./Humidity";
import Ventilation from "./Ventilation";
import lightIcon from "../assets/brightness.png";
import temperatureIcon from "../assets/temperature.png";
import humidityIcon from "../assets/air_quality.png";
import ventilationIcon from "../assets/airflow.png";

const images = [lightIcon, temperatureIcon, humidityIcon, ventilationIcon];

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
    step: {
        background: "transparent",
        border: "1px solid black",
        color: "green",
    },
    backButton: {
        minWidth: "unset",
        width: 40,
        height: 40,
        padding: "8px",
        borderRadius: "50%",
        color: "white",
        backgroundColor: theme.palette.primary.main,
        marginRight: theme.spacing(1),
        "&:disabled": {
            color: "white",
            opacity: 0.2,
        },
        "&:hover": {
            background: "gray",
        },
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

function getStepContent(stepIndex, valueSetterPair, image) {
    switch (stepIndex) {
        case 0:
            return <Light {...valueSetterPair} icon={image} />;
        case 1:
            return <Temperature {...valueSetterPair} icon={image} />;
        case 2:
            return <Humidity {...valueSetterPair} icon={image} />;
        case 3:
            return <Ventilation {...valueSetterPair} icon={image} />;
        default:
            return <div />;
    }
}

const Survey = ({
    sendData,
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
    const valueSettersPairs = [
        { light, setLight },
        { temperature, setTemperature },
        { humidity, setHumidity },
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
    async function handleLastStep() {
        const { response, error } = await sendData();
        if (error) {
            console.log("BUTTON ERROR", error);
            return error;
        }

        handleNext();
        return response;
    }

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>
                            {/* <StepIcon classes={{ root: classes.step }} /> */}
                            {label}
                        </StepLabel>
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
                            width: "90%",
                        }}
                    >
                        <TransitionGroup>
                            <CSSTransition
                                key={activeStep}
                                // in={location.key}
                                timeout={{ enter: 300, exit: 100 }}
                                classNames={"fade"}
                            >
                                {getStepContent(
                                    activeStep,
                                    valueSettersPairs[activeStep],
                                    images[activeStep],
                                )}
                            </CSSTransition>
                        </TransitionGroup>
                        <div style={{ width: "90%" }}>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                {"<"}
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    padding: "8px",
                                    width: 250,
                                    borderRadius: 20,
                                    textTransform: "none",
                                }}
                                onClick={
                                    // activeStep === steps.length - 1 ? handleLastStep :
                                    handleNext
                                }
                            >
                                {activeStep === steps.length - 1 ? "Finish" : "Done"}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Survey;
