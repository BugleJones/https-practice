//require through https
const https = require("https");

function getAndPrintHTMLChunks () {

  const requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step1.html"
  };

//Add error checking in later

  https.get(requestOptions, (response) => {
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

};

getAndPrintHTMLChunks();
