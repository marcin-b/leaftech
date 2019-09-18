import React, { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import {
    TransitionGroup,
    CSSTransition,
} from "react-transition-group";
import Survey from "./components/Survey";
import Home from "./components/Home";
import styled from "styled-components";

const Layout = ({ location }) => {
    const [temperature, setTemperature] = useState(5);
    const [humidity, setHumidity] = useState(5);
    const [light, setLight] = useState(5);
    const [ventilation, setVentilation] = useState(5);
    return (
        <Wrapper>
            <div className="wurzel">
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        in={location.key}
                        timeout={{ enter: 300, exit: 300 }}
                        classNames={"fade"}
                    >
                        <Switch location={location}>
                            <Route
                                exact
                                path="/"
                                render={props => <Home {...props} />}
                            />
                            <Route
                                path="/survey"
                                render={props => (
                                    <Survey
                                        {...props}
                                        {...{
                                            temperature,
                                            setTemperature,
                                            humidity,
                                            setHumidity,
                                            light,
                                            setLight,
                                            ventilation,
                                            setVentilation,
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
        opacity: 1;
    }

    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }
`;
export default withRouter(Layout);
