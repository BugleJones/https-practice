const https = require("https");

module.exports = function getHTML (options, callback) {

      https.get(options, (response) => {
        response.setEncoding("utf8");
    //Create long string of data
        let rawData = "";
        response.on("data", (chunk) => {
          rawData += chunk;
          console.log(rawData);
        });
        //
        // response.on("end", () => {
        //   console.log("Finished");
        //   // const parsedData = JSON.parse(rawData);
      //   //   // console.log(parsedData);
      //   });
      });
    };
