import { auth } from "./.secrets.js";

const config = {
    baseURL: "https://ewima.proficloud-staging.net/ds/v1/kairos/api/v1/datapoints",
    auth: auth,
    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        // Authorization: "Basic OTg3Y2Q0OTktMjM5ZS00Y2QxLWE0OGMtYTk5YjU1NGNjNzNmOnV4OHk4emNQSjBuUg",
    },
    // // responseType: "json",
};
export default config;
