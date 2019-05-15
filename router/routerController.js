const express = require("express");
const router = express.Router();
const homeController = require("../controller/homeController");
const airController = require("../controller/airController");
module.exports = router;

router.get("/", homeController.index);
router.get("/weather", homeController.index);
router.get("/weather/:name", homeController.detailParam);
router.get("/404", homeController.NotFound);

router.post("/countryDetail", homeController.countryDetail);
router.post("/AllList/:element", airController.all); //index.html sayfamdaki 5 ülke için..
