let express = require("express");
let router = express.Router();
let bandasController=require("../controllers/bandasController")


router.get("/",bandasController.index)
router.get("/id/:id", bandasController.detalle)
router.get("/genero/:genero", bandasController.genero)





module.exports = router;