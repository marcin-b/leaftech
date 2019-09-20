import React, { useState } from "react";
import axios from "axios";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Survey from "./components/Survey";
import Home from "./components/Home";
import styled from "styled-components";
import config from "./utils/API";

const Layout = ({ location }) => {
    const [light, setLight] = useState(50);
    const [temperature, setTemperature] = useState(50);
    const [humidity, setHumidity] = useState(50);
    const [ventilation, setVentilation] = useState(50);
    const [emotions, setEmotions] = useState(50);

    const data = {
        userFB_UserId: 1337,
        timestamp: Date.now(),
        userFB_Temperature_value: temperature,
        userFB_Light_value: light,
        userFB_Humidity_value: humidity,
        userFB_Ventilation_value: ventilation,
    };

    const sendData = async () => {
        const { data: response, error } = await axios.post("/write", data, config);
        if (error) {
            console.log("error", error);
            return error;
        }
        console.log("response", response);
        return response;
    };

    return (
        <Wrapper>
            <div className="wurzel">
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={{ enter: 300, exit: 300 }}
                        classNames={"fade"}
                    >
                        <Switch location={location}>
                            <Route exact path="/" render={props => <Home {...props} />} />
                            <Route
                                path="/survey"
                                render={props => (
                                    <Survey
                                        {...props}
                                        {...{
                                            sendData,
                                            temperature,
                                            setTemperature,
                                            humidity,
                                            setHumidity,
                                            light,
                                            setLight,
                                            ventilation,
                                            setVentilation,
                                            emotions,
                                            setEmotions,
                                        }}
                                    />
                                )}
                            />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }

    .fade-exit {
        opacity: 0;
    }

    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }
`;
export default withRouter(Layout);
