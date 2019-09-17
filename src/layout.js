import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom"
import Temperature from "./components/Temperature"
import Home from "./components/Home"

const Layout = () => {
    return (
        <Router>
            <Link to="/">Home</Link>

            <Link to="/temperature">Temerature</Link>
            <Route exact path="/" component={Home}>
                <div></div>
            </Route>
            <Route
                path="/temperature"
                component={Temperature}
            ></Route>
        </Router>
    )
}
export default Layout
