//require through https
var https = require("https");

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: "syntaris.github.io",
    path: "/http-examples/step1.html"
  };

  https.get(requestOptions, function (response) {
    response.setEncoding("utf-8");
    response.on("data", function (data) {
      console.log("Chunk Received. Length:", data.length);
    });
    response.on("end", function () {
      console.log("Response stream complete.");
    });

  });

}

getAndPrintHTMLChunks();
