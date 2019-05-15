const express = require('express');
const app = express();
app.listen(8000);
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ 'extended': 'true' }));
app.set('views', __dirname + '/views');

app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));

const routerController = require("./router/routerController");
console.log("Success !! Sunucu başarıyla çalışıyor..")
app.use('/', routerController);
