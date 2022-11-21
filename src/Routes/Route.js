const CollegeModel = require("../Models/CollegeModel");
const InternModel = require("../Models/InternModel");
const CollegeController = require ("../Controller/CollegeController")
const express = require("express")
const router = express.Router();


router.post('/colleges', CollegeController.createCollege);



router.all("/*", function (req, res) {
    try{
    res.status(404).send({
        status: false,
        msg: "The api you request is not available"
    })
}catch(err){res.send(err.message)}
})

module.exports = router;