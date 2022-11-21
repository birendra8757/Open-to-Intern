const CollegeModel = require("../Models/CollegeModel");
const mongoose = require("mongoose")

function stringVerify(value) {
    if (typeof value !== "string" || value.length == 0) {
        return false
    }
    return true
}

const createCollege = async function (req, res) {
     try {
        const colData= req.body

        if (Object.keys(colData).length == 0) {
            return res.status(400).send({ msg: "Please Enter details" });
        }

            const { Name, fullName, logoLink, isDeleted } = colData

        if (!Name) {
            return res.status(400).send({ msg: "name is required" });
        }
        if (Name) {
            if (!stringVerify(Name)) {
                return res.status(400).send({ msg: "name should be type string" });
            }
            const clgName = await CollegeModel.findOne({ Name: Name })
            if (clgName) {
                return res.status(404).send({ status: false, msg: "invalid college name or college name already exist" });
            }
            if (!fullName) {
                return res.status(400).send({ msg: "fullName is required" });
            }
            if (fullName) {
                if (!stringVerify(fullName)) {
                    return res.status(400).send({ msg: "fullName should be type string" });
                }
            }
            if (!logoLink) {
                return res.status(400).send({ msg: "logoLink is required" });
            }
            if (logoLink) {
                if (!stringVerify(logoLink)) {
                    return res.status(400).send({ msg: "logoLink should be type string" });
                }
            }
            if (isDeleted) {
                if (typeof isDeleted !== Boolean) {
                    return res.status(400).send({ msg: "isDeleted should be type Boolean" });
                }
            }

            const finalData = await CollegeModel.create(colData)

            return res.status(201).send({ status: true, data: finalData });
        
    catch (err) {
            return res.status(500).send({ error: err.message, status: false });
        }
    }

//********************************************* */



module.exports = { createCollege }