const http = require("http");
const fs = require("fs");
const soap = require("soap");

// Define the service implementation
const service = {
  CalculatorService: {
    CalculatorPort: {
      Add: function (args, callback) {
        const intA = args.intA;
        const intB = args.intB;

        // Return the response
        const result = {
          AddResult: intA + intB,
        };
        callback(null, result);
      },
    },
  },
};

const xml = fs.readFileSync("calculator.wsdl", "utf8");

//http server example
var server = http.createServer(function (request, response) {
  response.end("404: Not Found: " + request.url);
});

const PORT = 8000;
server.listen(PORT);

soap.listen(server, "/calculator", service, xml, function () {
  console.log(
    "SOAP server running at http://localhost:" + PORT + "/calculator?wsdl"
  );
});
