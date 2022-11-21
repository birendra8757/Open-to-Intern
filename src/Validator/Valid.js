
const {isValidObjectId} = require("mongoose")

// name Validation
const isValidName = function(name){
    const  nameRegex = /^[a-zA-Z]{2,20}$/
    return nameRegex.test(name)
}

//Email Validation
const isValidEmail = function(email){
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ 
    return emailRegex.test(email)
}

// Mobile no Validation
const isValidMobileNo = function(mobile){
    const mobileregex = /^([+]\d{2}[ ])?\d{10}$/
    return mobileregex.test(mobile)
}

// ObjectId validation
const  isValidObjectId = function(id){
    const ObjectId = isValidObjectId(id);
    return ObjectId
}

//Boolean Validation

const isBoolean = function(value){
    if(value === true || value === false) return true
    return false
}

// String Validation

const isValidString = function(value){
    if(typeof value === 'undefined' || value ===null)  return false
    if(typeof value === 'string' && value.trim().length ===0)return false
    return true
}
       



module.exports = { isValidName, isValidEmail, isValidMobileNo, isValidObjectId, isBoolean, isValidString}

