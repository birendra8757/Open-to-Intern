const CollegeController = require ("../Controller/CollegeController")
const InternController= require("../Controller/InternController")
const express = require("express")
const router = express.Router();


router.post('/functionup/colleges', CollegeController.createCollege);
router.post('/functionup/interns',InternController.createIntern );
router.post('/functionup/collegeDetails',InternController.Getcollegedetail );




router.all("/*", function (req, res) {
    try{
    res.status(404).send({
        status: false,
        msg: "The api you request is not available"
    })
}catch(err){res.send(err.message)}
})

module.exports = router; 