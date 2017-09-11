//require through https
const https = require("https");

function getPrintHTMLChunks () {

  const requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step2.html"
  };

//Add error checking in later

  https.get(requestOptions, (response) => {
    response.setEncoding("utf8");
//Create long string of data
    let rawData = "";
    response.on("data", (chunk) => {
      rawData += chunk;
    });

    response.on("end", () => {
      console.log(rawData);

      // const parsedData = JSON.parse(rawData);
      // console.log(parsedData);
    });
  });

};

getPrintHTMLChunks();
