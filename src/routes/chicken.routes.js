const express = require("express");
const router = express.Router();

const chicken = require("../controllers/chicken.controller");

router.post("/saveone", chicken.create);
router.get("/getone/:id", chicken.getonebyId);
router.put("/update/:id", chicken.updateById);
router.put("/run/:id", chicken.runningChicken);
router.patch("/modify/:id", chicken.modifyById);
router.delete("/delete/:id", chicken.deleteById);

module.exports = router;
