const path = require("path");
const fetch = require("node-fetch");
module.exports.index = function(req, res) {
  res.sendFile(path.join(__dirname, "../views/", "index.html"));
};

let countryName;
module.exports.detailParam = function(req, res) { //GET ile önce detay sayfama gidiyorum. -->detail.html
  countryName = req.params.name;
  res.sendFile(path.join(__dirname, "../views/", "detail.html"));
};

module.exports.NotFound = function(req, res) {
  res.sendFile(path.join(__dirname, "../views/", "404.html"));
};

module.exports.countryDetail = function(req, res) { //POST ile 'de yukarıdan aldığım countryName parameteresi ile API'de filtreleme yapıyorum.
  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
      countryName +
      "&appid=b712b9a9b0785a9842d7c7ba49f37a5f"
  )
    .then(resp => resp.json())
    .then(function(data) {
      res.send(data); //Girdiğim ülkeye ait bütün datamı'da res.send ile yine detail.html sayfama gönderiyorum. --> detail.html
    });
    
};
