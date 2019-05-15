const fetch = require("node-fetch");
module.exports.AllList = function(req, res) {
  var counrty = req.params.element; //Şehir parametresini aldım ve API'de filtreleme yaptım.
  console.log(counrty);
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      counrty +
      "&appid=b712b9a9b0785a9842d7c7ba49f37a5f"
  )
    .then(resp => resp.json())
    .then(function(data) {
      res.send(data);
       //API kısmında bütün ülkeler ayrı ayrı APİ'lerde tutuldukları için, ben hepsini tek bir yerde toplamak istedim. Aksi halde çok gereksiz kod yazmak zorunda kalacaktım. Bu kısımda diziye attığım ülkelerin bütün hava durumu bilgilerini topladım ve index.html sayfamda tek bir diziye attım. Artık foreach ile içlerinde dönüp, 5 ülkeyi de tek bir diziden ekranda gösterebilirim. -->index.html
    });
};
