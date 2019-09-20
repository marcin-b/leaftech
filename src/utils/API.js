import { auth } from "./.secrets.js";

const config = {
    baseURL: "https://ewima.proficloud-staging.net/ds/v1/kairos/api/v1/datapoints",
    auth,
    headers: {
        "X-Requested-With": "XMLHttpRequest",

        "Content-Type": "application/json",

        Authorization: "Basic OTg3Y2Q0OTktMjM5ZS00Y2QxLWE0OGMtYTk5YjU1NGNjNzNmOnV4OHk4emNQSjBuUg",

        "User-Agent": "PostmanRuntime/7.17.1",

        Accept: "*/*",

        "Cache-Control": "no-cache",

        "Postman-Token":
            "c7039f1c-5faf-4b3d-90c8-81136f51dccd,2c32a025-1302-480a-b3a4-331a22b93c18",

        Host: "ewima.proficloud-staging.net",

        "Accept-Encoding": "gzip, deflate",

        "Content-Length": "149",

        Cookie:
            "AWSALB=XXmMz90mAb5nvq5MxGVPBcmnePuQyihcZPxvzI+Z9Na/HszwplBY/15iyBnqE5wPuVfY6JH3x1J56g5gndwzYXgZaEiKHI2xyX3ZgNcunWd3KU350Pbdndmr9TJS",

        Connection: "keep-alive",

        "cache-control": "no-cache",
    },
    // responseType: "json",
};
export default config;
