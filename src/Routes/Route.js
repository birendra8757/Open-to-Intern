const express = require('express');
const router = express.Router();
const collagecontroller = require('../controllers/collageController')
const interncontroller = require('../controllers/InternController')


// ===========================================================
router.post("/functionup/colleges", collagecontroller.createcollege)

router.post("/functionup/interns", interncontroller.createintern)

router.get("/functionup/collegeDetails" , collagecontroller.Getcollegedetail)

router.all("/*", function (req, res) {
    try{
    res.status(404).send({
        status: false,
        msg: "The api you request is not available"
    })
}catch(err){res.send(err.message)}
})

module.exports = router;