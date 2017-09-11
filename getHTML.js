//require through https
const https = require("https");

const requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step4.html"
};

function printHTML (html) {
  console.log(html);
}

function getHTML (options, callback) {

    https.get(options, (response) => {
      response.setEncoding("utf8");
  //Create long string of data
      let rawData = "";
      response.on("data", (chunk) => {
        rawData += chunk;
        console.log(rawData);
      });

      response.on("end", () => {
        const parsedData = JSON.parse(rawData);
        // console.log(parsedData);
      });
    });
}

getHTML(requestOptions, printHTML);
