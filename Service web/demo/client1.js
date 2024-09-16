var soap = require("soap");
var url = "http://www.dneonline.com/calculator.asmx?wsdl";

soap.createClient(url, {}, function (err, client) {
  if (err) console.log(err);
  //console.log(client);

  var args = { intA: 2, intB: 3 };
  client.Add(args, (err, result) => {
    console.log(result);
  });
});
