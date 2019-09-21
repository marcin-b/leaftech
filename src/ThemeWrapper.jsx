import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import { borderRadius } from "@material-ui/system";
import { callbackify } from "util";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#808080",
            main: "#363636",
            dark: "#1a1a1a",
            contrastText: "#fff",
        },
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
        },
    },
    typography: {
        fontFamily: [
            "Nunito",
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
    overrides: {
        // MuiStepIcon: {
        //     root: {
        //         color: "transparent",
        //         border: "1px solid black",
        //         borderRadius: "50%",
        //         // backgroundColor: "green", // or logic to change color
        //         active: { color: "white" },
        //     },
        //     text: {
        //         fill: "gray",
        //     },
        //     active: {
        //         color: "white",
        //         // filter: "invert(1)",
        //     },
        // },
    },
});

const ThemeWrapper = props => {
    return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};
export default ThemeWrapper;
