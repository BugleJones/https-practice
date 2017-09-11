//require through https
const https = require("https");

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
        console.log(parsedData);
      });
    });
}

function printHTML (html) {
  console.log(html);
}

const options = {
  host: "sytantris.github.io",
  path: "/http-examples/step4.html"
};

getHTML(options);
