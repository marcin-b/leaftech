import { auth } from "./.secrets.js";

const authString = window.btoa(auth.username + ":" + auth.password);

const config = {
    baseURL: "https://ewima.proficloud-staging.net/ds/v1/kairos/api/v1/datapoints",
    auth: auth,
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpsRequest",
        Authorization: "Basic " + authString,
    },
    // // responseType: "json",
};
export default config;
