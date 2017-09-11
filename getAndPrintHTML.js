//require through https
const https = require("https");

function getAndPrintHTMLChunks (options) {

//Add error checking in later

  https.get(options, (response) => {
    response.setEncoding("utf8");
//Create long string of data
    let rawData = "";
    response.on("data", (chunk) => {
      rawData += chunk;
      console.log(rawData);
    });

    response.on("end", () => {
      console.log(rawData);

      // const parsedData = JSON.parse(rawData);
      // console.log(parsedData);
    });
  });

}

const options = {
  host: "sytantris.github.io",
  path: "/http-examples/step1.html"
};

getAndPrintHTMLChunks(options);
