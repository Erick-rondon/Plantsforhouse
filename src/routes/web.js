const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("./pages/Home")
});
router.get("/Contacts", (req, res)=>{
    res.render("./pages/Contacts")
});
module.exports = router;